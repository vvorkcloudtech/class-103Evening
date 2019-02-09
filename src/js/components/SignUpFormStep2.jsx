import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import Fileuploader from 'react-firebase-file-uploader';
require('firebase/storage');
require('firebase/auth');
class SignUpForm2 extends Component {
    state = {
        name: '',
        phone: 0,
        IsUploading: false,
        progress: 0,
        UserDp: '',
    }
    handleUploadStart = () => {
        this.setState({ IsUploading: true, progress: 0 })
        console.log(this.props, this.state)
    }
    handleProgress = (progress) => {
        this.setState({ progress })
    }
    handleUploadError = (error) => {
        this.setState({ IsUploading: false })
        console.log(error)
    }
    handleUploadSuccessfully = (filename) => {
        this.setState({ UserDp: filename, progress: 100, IsUploading: false })
        console.log(filename)
        firebase.storage().ref('UserProfile/' + this.props.properties.username).child(filename).getDownloadURL().then(url => {
            this.setState({ UserDp: url })
            this.props.properties.currentUser.updateProfile({
                photoURL: this.state.UserDp
            }).then(function (response) {
                console.log(Worked)
            }).catch(function (error) {
                // An error happened.
            });
        })
    }
    DataStore = (e) => {
        e.preventDefault();
        let user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: this.state.name,
            phoneNumber: this.state.phone
        }).then(function (response) {
            console.log(Worked)
        }).catch(function (error) {
            // An error happened.
        });
    }
    NameSet = (e) => {
        e.preventDefault();
        this.setState({ name: e.target.value })
    }
    PhoneNoSet = (e) => {
        e.preventDefault();
        this.setState({ phone: e.target.value })
    }

    render() {
        console.log(this.state)
        return (
            <div className="container-fluid MainSignUp">
                <div className="row">
                    <div className="col-md-4 SignUpLeft">
                        <div className="InnerContent">
                            <h1>carrino</h1>
                            <ul className="Features">
                                <li><i className="fa fa-search"></i><span>Explore your favourite topics.</span></li>
                                <li><i className="fa fa-comments-o"></i><span>Create your own post and publish it.</span></li>
                                <li><i className="fa fa-thumbs-up"></i><span>Like, comments, and share the posts.</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8 SignUpRight2">
                        <div className="InnerContent">
                            <h1>Step 2</h1>
                            <form className="container" onSubmit={this.DataStore}>
                                <label id="ImageUploader" htmlFor="ProfileDP"><span>Click Here To Upload Image</span></label>
                                {/* <input type="file" name="ProfileDP" id="ProfileDP" /> */}
                                <Fileuploader
                                    accept="image/*"
                                    name="avatar"
                                    id="ProfileDP"
                                    randomizeFilename
                                    storageRef={firebase.storage().ref('UserProfile/' + this.props.properties.username)}
                                    onUploadStart={this.handleUploadStart}
                                    onUploadError={this.handleUploadError}
                                    onUploadSuccess={this.handleUploadSuccessfully}
                                    onProgress={this.handleProgress}
                                />
                                <br />
                                <label htmlFor="FullName">Full Name</label>
                                <br />
                                <input id="FullName" type="text" onChange={this.NameSet} placeholder="Enter Your Full Name...." />
                                <label htmlFor="PhoneNumber">Phone Number</label>
                                <br />
                                <input id="PhoneNumber" onChange={this.PhoneNoSet} type="number" placeholder="Enter Your Phone Number...." />
                                <button type="submit">Sign Up</button>
                                <span><Link to='/Login' >Sign In</Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUpForm2;