import React, { Component } from 'react';
import { Jumbotron, Row, Col, Panel, Table, Image, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>rfurman</h1>
          <p>An amalgam of random side projects.</p>
        </Jumbotron>

        <Row>
          <Col md={6}>
            <Panel>
              <Panel.Heading>Hardware</Panel.Heading>
              <Panel.Body>
                <Row>
                  <Col md={6}>
                    <p>
                      This site is being served by a recently updated machine that I keep running as a hobby server. Cost is low (electricity) and the added
                      benefit is an ongoing learning experience for me.
                    </p>
                    <p>
                      I also happen to be lucky enough to own a condo in a new complex with
                      fibre to the home (FTTH) provided by Shaw. This gives me a very respectable 300 Mbps download and 15 Mbps upload, though
                      I can scale this up to 1000 Mbps download and 50 Mbps upload.
                    </p>
                  </Col>
                  <Col md={6}>
                    <a href="http://beta.speedtest.net/result/6574660585"><Image responsive rounded src="http://beta.speedtest.net/result/6574660585.png" /></a>
                  </Col>
                </Row>
              </Panel.Body>
              <Table striped>
                <thead>
                  <tr>
                    <th>Part</th>
                    <th>Model</th>
                    <th>Link <Glyphicon glyph="glyphicon-new-window" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CPU</td>
                    <td>Intel Core i3-8100</td>
                    <td><a href="https://ark.intel.com/products/126688/Intel-Core-i3-8100-Processor-6M-Cache-3_60-GHz" target="_blank" rel="noopener noreferrer">ark.intel.com</a></td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>8GB DDR4-2400 RAM</td>
                    <td><a href="https://www.gskill.com/en/product/f4-2400c17s-8gnt" target="">gskill.com</a></td>
                  </tr>
                  <tr>
                    <td>HDD</td>
                    <td>Samsung 850 EVO</td>
                    <td><a href="http://www.samsung.com/semiconductor/minisite/ssd/product/consumer/850evo.html" target="_blank" rel="noopener noreferrer">samsung.com</a></td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
          </Col>

          <Col md={6}>
            <Panel>
              <Panel.Heading>Software</Panel.Heading>
              <Panel.Body>
                <p>
                  I have leveraged a number of languages, frameworks, libraries, and engines to make the various projects on
                  this server possible.
                </p>
                <p>
                  Over the years I have learned a lot about Linux and running a machine exclusively from
                  a command line (Ubuntu Server, NGINX, Apache), building games using a common engine (Unity), and developing modern
                  websites (Angular, React, Bootstrap).
                </p>
              </Panel.Body>
              <Table striped>
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Software</th>
                    <th>Link <Glyphicon glyph="glyphicon-new-window" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Operating System</td>
                    <td>Ubuntu Server 18.04.1 LTS</td>
                    <td><a href="https://www.ubuntu.com/server" target="_blank" rel="noopener noreferrer">ubuntu.com</a></td>
                  </tr>
                  <tr>
                    <td>Web Server</td>
                    <td>NGINX</td>
                    <td><a href="https://www.nginx.com/" target="_blank" rel="noopener noreferrer">nginx.com</a></td>
                  </tr>
                  <tr>
                    <td>Web App User Interface Library</td>
                    <td>React</td>
                    <td><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">reactjs.org</a></td>
                  </tr>
                  <tr>
                    <td>Web App Front End Framework</td>
                    <td>React-Bootstrap</td>
                    <td><a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">react-bootstrap.github.io</a></td>
                  </tr>
                  <tr>
                    <td>Code Repository</td>
                    <td>GitHub</td>
                    <td><a href="https://github.com/rdfurman?tab=repositories" target="_blank" rel="noopener noreferrer">github.com</a></td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
          </Col>

          <Col md={6}>
            <Panel>
              <Panel.Heading>Demon Shanker 2</Panel.Heading>
              <Panel.Body>
                <strong>Created for Ludum Dare 29. Built with Unity by a team of 5, with me sharing design and coding duties.</strong>
                <p>
                  This is no ordinary hobo, his name is Demon Shanker! Only Demon Shanker can see demons for what they truly
                  are. Take a swig to activate vodka vision and let the shankin' begin. Keep on shankin' until you run out of vodka
                  but be careful, shankin' too many humans may draw attention to yourself...
                </p>
              </Panel.Body>
              <Panel.Footer>
                <ButtonGroup justified>
                  <Button href="http://ludumdare.com/compo/ludum-dare-29/?action=preview&uid=37215" target="_blank" rel="noopener">Ludum Dare Entry <Glyphicon glyph="glyphicon-new-window" /></Button>
                  <Button href="/demonshanker2">Play</Button>
                </ButtonGroup>
              </Panel.Footer>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;