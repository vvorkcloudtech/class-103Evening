import React, { Component } from 'react';
import PostMain from './PostMain';
import MenuBar from './Menubar';
import Newsletter from './NewsLetter';
class HomePage extends Component {
    render() {
        return (
            <div>
                {/* <MenuBar /> */}
                <PostMain />
                <Newsletter />
            </div>
        )
    }
}
export default HomePage;