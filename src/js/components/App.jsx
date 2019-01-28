import React from "react";
import Profile from "./Profile.jsx"
import Header from "./header";
import Header1 from "./Header1"

class App extends React.Component {
  render() {
    return (
      <div>
        <div>World</div>
        <Header/>
        <Header1/>
        <div>
          <h1>
            World
          </h1>
          <Profile />
        </div>


      </div>
    );
  }
}
export default App;
