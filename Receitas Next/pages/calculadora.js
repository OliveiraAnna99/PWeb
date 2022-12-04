import dynamic from 'next/dynamic'
import styles from '../styles/Main.module.css'
import { Container, Row, Col, Input, Button, Card, CardBody } from 'reactstrap';
function Calculadora(){
    const buttonStyle  = {width: "100%" };
    const containerStyle = {width: "25%"};
    return (
        <div>
        <Card>
        <CardBody>
            <Container  style={containerStyle}>
                <Row>
                    <Col xs='12'>
                        <Input></Input>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs='9'>
                        <Row>
                            <Col xs='4'>
                                <Button style={buttonStyle}>7</Button>
                            </Col>
                            <Col xs='4'>
                                 <Button style={buttonStyle}>8</Button>
                            </Col>
                            <Col xs='4'>
                                 <Button style={buttonStyle}>9</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='4'>
                                 <Button style={buttonStyle}>4</Button>
                            </Col>
                            <Col xs='4'>
                                <Button style={buttonStyle}>5</Button>
                            </Col>
                            <Col xs='4'>
                                <Button style={buttonStyle}>6</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='4'>
                                <Button style={buttonStyle}>1</Button>
                            </Col>
                            <Col xs='4'>
                                <Button style={buttonStyle}>2</Button>
                            </Col>
                            <Col xs='4'>
                                <Button style={buttonStyle}>3</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='4'>
                                <Button style={buttonStyle}>C</Button>
                            </Col>
                            <Col xs='4'>
                                <Button style={buttonStyle}>0</Button>
                            </Col>
                            <Col xs='4'>
                                <Button style={buttonStyle}>=</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs='3'>
                        <Row>
                            <Col xs='12'>
                                <Button style={buttonStyle}>%</Button>
                            </Col>
                            <Col xs='12'>
                                <Button style={buttonStyle}>X</Button>
                            </Col>
                            <Col xs='12'>
                                <Button style={buttonStyle}>-</Button>
                            </Col>
                            <Col xs='12'>
                                <Button style={buttonStyle}>+</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </CardBody>
        </Card>
        </div>
    );
}

export default Calculadora;