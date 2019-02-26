import React, { Component } from 'react';
import { Row, Col, Carousel, Image } from 'react-bootstrap';

class Photography extends Component {
  render() {

    return (
      <div>
        <Row>
          <Col sm={12}>
            <Carousel>
              <Carousel.Item>
                <Image src="/images/IMG_20180806_101516.jpg" thumbnail />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Photography;