import React, { Component } from 'react';
import config from './firebase';
import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/database');
class TestPost extends Component {
    OnHandler(e){
        e.preventDefault();
        // firebase.initializeApp(config);
        var userId = firebase.auth().currentUser.displayName;
        // console.log(firebase.auth().currentUser)
        var database = firebase.database().ref('users/'+[userId]);
        let newPush = database.push();
            let name =document.getElementById('postId').value;
            let email =document.getElementById('postDetail').value;
            // e.preventDefault();
            newPush.set({
                name:name,
                email:email
            })
            function snapshotToArray(snapshot) {
                var returnArr = [];
            
                // snapshot.forEach(function(childSnapshot) {
                //     var item = childSnapshot.val();
                //     item.key = childSnapshot.key;
            
                //     returnArr.push(item);
                // });
            
                return returnArr;
            };
            let ref =firebase.database().ref('users').child(userId);
            let arrer = [];
            ref.on('value', snap => {
                snap.forEach(function(childSnapshot) {
                    var childData = childSnapshot.val();
                    arrer.push(childData)
                    childData.key = childSnapshot.key;
                    console.log(arrer)
                });
                // console.log(snap.val())
            })

    }
    render() {
        return (
            <div>
                hello
                <form action="">
                    <input type="text" id="postId" />
                    <textarea name="postdetail" id="postDetail" cols="30" rows="10"></textarea>
                    <button  onClick={this.OnHandler}>Submit</button>
                </form>
            </div>
        )
    }
}
export default TestPost;