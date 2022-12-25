import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './styles.scss'

const SinglePriceGridPage = () => {
  return (
    <div className='app-container'>
      <Container>
        <Row>
          <Col className='grid-top'>
              <h3 className='card-title'>Join our community</h3>
              <h4 className='card-title'>30-day,hassle-free money back guarantee</h4>
              <p>
                Gain access to our full library of tutorials along with expert code reviews.
                Perfect for any developers who are serious about honing their skills.
              </p>
          </Col>
        </Row>
        <Row>
          <Col className='grid-left'>
              <h4 className='card-title'>Monthly Subscription</h4>
              <div className='price'>$29 <span className='per-month'>per month</span></div>
              <p>Full access for less than $1 a day</p>
              <Button className='sign-up-btn'>Sign Up</Button>
          </Col>
          <Col className='grid-right'>
              <h4 className='card-title'>Why Us</h4>
              <ul>
                <li>Tutorials by industry experts</li>
                <li>Peer & expert code review</li>
                <li>Coding exercises</li>
                <li>Access to our GitHub repos</li>
                <li>Community forum</li>
                <li>Flashcard decks</li>
                <li>New videos every week</li>
              </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SinglePriceGridPage;