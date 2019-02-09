import React, { Component } from 'react';
import config from './firebase';
import firebase from 'firebase/app';
import Fileuploader from 'react-firebase-file-uploader';
require('firebase/auth');
require('firebase/storage');
class ImageUploader extends Component {
    constructor(){
        super();
        this.state = {
            IsUploading: false,
            progress: 0,
            UserDp: '',
        }
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
        firebase.storage().ref('UserProfile/' + this.props.properties.username ).child(filename).getDownloadURL().then(url => {
            this.setState({ UserDp: url })
            this.props.properties.currentUser.updateProfile({
                photoURL: this.state.UserDp
            }).then(function(response) {
                console.log(Worked)
            }).catch(function(error) {
                // An error happened.
            });
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                {/* <input onClick={this.handleUploadStart} type="file" accept="image/*" name="avatar"storageRef={firebase.storage().ref("UserDp")}onUploadStart={this.handleUploadStart}onUploadError={this.handleUploadError}onUploadSuccess={this.handleUploadSuccess}onProgress={this.handleProgress} value="Click Here" /> */}
                <a href={this.state.UserDp}>Jafeel</a>
                <Fileuploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref('UserProfile/' + this.props.properties.username  )}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccessfully}
            onProgress={this.handleProgress}
          />
            </div>
        )
    }
}
export default ImageUploader;