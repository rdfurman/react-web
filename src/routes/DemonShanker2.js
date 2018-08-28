import React, { Component } from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';

class DemonShanker2 extends Component {

  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
      "../demonshanker2/build/Builds.json",
      "../demonshanker2/build/UnityLoader.js"
    );
  }

  render() {
    return <Unity unityContent={this.unityContent} />;
  }

}

export default DemonShanker2;