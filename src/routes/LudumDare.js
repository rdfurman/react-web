import React, { Component } from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import { Panel, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

class DemonShanker2 extends Component {

  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
      "../demonshanker2/build/Builds.json",
      "../demonshanker2/build/UnityLoader.js"
    );
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>Ludum Dare 29: Demon Shanker 2</Panel.Heading>
        <Panel.Body>
          <strong>Created for Ludum Dare 29. Built with Unity by a team of 5, with me sharing design and coding duties.</strong>
          <p>
            This is no ordinary hobo, his name is Demon Shanker! Only Demon Shanker can see demons for what they truly
            are. Take a swig to activate vodka vision and let the shankin' begin. Keep on shankin' until you run out of vodka
            but be careful, shankin' too many humans may draw attention to yourself...
          </p>
          <Unity unityContent={this.unityContent} />
        </Panel.Body>
        <Panel.Footer>
          <ButtonGroup justified>
            <Button href="http://ludumdare.com/compo/ludum-dare-29/?action=preview&uid=37215" target="_blank" rel="noopener">Ludum Dare Entry <Glyphicon glyph="glyphicon-new-window" /></Button>
          </ButtonGroup>
        </Panel.Footer>
      </Panel>
    );
  }
}

export default DemonShanker2;