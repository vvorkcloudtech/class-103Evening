import React from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg';
import $ from 'jquery';
window.$ = $;

class CreatPost extends React.Component {
    constructor() {
        super();
        this.state = {
            modelNew: 'Creat your post and make it awesome'
        };
    }

    handleModelChange = (modelNew) => {
        this.setState({ modelNew: modelNew });
        this.props.updateState(this.state.modelNew);
    }
    render() {
        console.log("modelNew", this.state.modelNew);
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4" id="left-side">
                            <h1 id="logo">carrino</h1>
                            <br /><br /><br />
                            <ul>
                                <li><i className="fas fa-search">&nbsp;</i>Explorer your favourite topic.</li>
                                <br />
                                <li><i className="fas fa-comments">&nbsp;</i>Creat your own post and publish.</li>
                                <br />
                                <li><i className="far fa-thumbs-up">&nbsp;</i>Like, Comment and share the post.</li>
                            </ul>

                            <br /><br /><br />
                        </div>

                        <div className="col-md-8" id="right-side">
                            <div className="container-fluid">
                                <h1 id="creat">Creat a Post</h1>
                                <div className="col-md-10 col-md-offset-1">
                                <br/><br/>
                                    <FroalaEditor className="editor"
                                        tag='textarea'
                                        config={this.config}
                                        modelNew={this.state.modelNew}
                                        onModelChange={this.handleModelChange} />
                                    
                                    <br /><br /><br />
                                    <input type="button" id="submit" value="Submit." />
                                    <input type="reset" id="clear" name="clear" value="Clear." />

                                    {/* <!--br tags for height--> */}
                                    <br /><br /><br />
                                    <br /><br /><br />
                                    <br /><br /><br />
                                    <br /><br /><br /><br />
                                    <br /><br /><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="output"></div>

            </div>
        );
    }
}
export default CreatPost;