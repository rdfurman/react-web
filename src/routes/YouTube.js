import React, { Component } from 'react';
import { Row, Col, Panel } from 'react-bootstrap';

class YouTube extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={4}>
            <Panel>
              <Panel.Heading>2018 Philippines Part 1: Tandag</Panel.Heading>
              <Panel.Body>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe title="2018philippines1" 
                          className="embed-responsive-item"
                          src="https://www.youtube.com/embed/FPHajLFvJno" 
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                  </iframe>
                </div>
              </Panel.Body>
            </Panel>
          </Col>
          
          <Col md={4}>
            <Panel>
              <Panel.Heading>2018 Philippines Part 2: Britania</Panel.Heading>
              <Panel.Body>
                <div className="embed-responsive embed-responsive-16by9">
                <iframe title="2018philippines2"
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/OW5fmTahTO4" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                </iframe>
                </div>
              </Panel.Body>
            </Panel>
          </Col>

          <Col md={4}>
            <Panel>
              <Panel.Heading>2018 Philippines Part 3: Coron</Panel.Heading>
              <Panel.Body>
                <div className="embed-responsive embed-responsive-16by9">
                <iframe title="2018philippines3"
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/2FQTyb4nH2s" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                </iframe>
                </div>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}

/*
*/

export default YouTube;