// src/Calculator.js
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setDisplay('');
    } else if (value === '←') {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + value);
    }
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <input
            type="text"
            value={display}
            className="form-control mb-3"
            readOnly
            style={{ fontSize: display.length > 10 ? '1.5em' : '2em' }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={() => handleClick('1')}>1</Button>
          <Button variant="primary" onClick={() => handleClick('2')}>2</Button>
          <Button variant="primary" onClick={() => handleClick('3')}>3</Button>
          <Button className='symbols' variant="primary" onClick={() => handleClick('+')}>+</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={() => handleClick('4')}>4</Button>
          <Button variant="primary" onClick={() => handleClick('5')}>5</Button>
          <Button variant="primary" onClick={() => handleClick('6')}>6</Button>
          <Button className='symbols' variant="primary" onClick={() => handleClick('-')}>-</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={() => handleClick('7')}>7</Button>
          <Button variant="primary" onClick={() => handleClick('8')}>8</Button>
          <Button variant="primary" onClick={() => handleClick('9')}>9</Button>
          <Button className='symbols' variant="primary" onClick={() => handleClick('*')}>*</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={() => handleClick('0')}>0</Button>
          <Button variant="primary" onClick={() => handleClick('.')}>.</Button>
          <Button variant="danger" onClick={() => handleClick('←')}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <Button className='symbols' variant="primary" onClick={() => handleClick('/')}>/</Button>

        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="danger" onClick={() => handleClick('C')}>C</Button>
          <Button className='equals' variant="success" onClick={calculate}>=</Button>
          <Button className='symbols' variant="primary" onClick={() => handleClick('%')}>%</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Calculator;
