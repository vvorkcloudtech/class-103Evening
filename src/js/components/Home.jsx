import React, { Component } from 'react';
import PostMain from './PostMain';
import MenuBar from './Menubar';
import Newsletter from './NewsLetter';
import Footer from './Footer';
class HomePage extends Component {
    render() {
        return (
            <div>
                <MenuBar />
                <PostMain />
                <Newsletter />
                <Footer />
            </div>
        )
    }
}
export default HomePage;