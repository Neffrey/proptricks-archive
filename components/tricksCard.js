//Framework
import React, { useState } from 'react'
import { Row , Col, Card, Button, Toast } from 'react-bootstrap/'

// Styles
import styles from './styles/tricks.module.css'


const TricksCard = ( props ) => {
    return ( 
        <Row>
            { props.trickData.map(({ id, title, TrickFields }) => {
                const [ show, setShow ] = useState(false)

                const handleClick = () => {
                    console.log("Card Clicked")
                    console.log(id)  
                    console.log(TrickFields)
                    setShow(!show)
                }
                
                return(
                    <Card style={{ width: '18rem' }} key={id}>
                        <Card.Img variant="top" src="/rgbcmyfol-wbrdr-750.png" />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                Alt Names: <br />
                                
                            </Card.Text>
                            <Row>
                                <Col>
                                    <Button 
                                        variant="outline-primary"
                                        onClick={ handleClick }
                                    >
                                        Clicky
                                    </Button>
                                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                        <Toast.Header>
                                            Yaaayyy
                                        </Toast.Header>
                                    </Toast>
                                </Col>
                                <Col>
                                    <Button 
                                        variant="outline-danger"
                                        href={TrickFields.youtubeLink}
                                    >
                                        Clicky
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                )
            })}     
        </Row>
    )
}

export default TricksCard

/*
{ props.trickData.map(({ id, title, TrickFields }) => {
                // const [ show, setShow ] = useState(false)

                const handleClick = () => {             
                }
                
                return(null
                )
            })}     




                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/rgbcmyfol-wbrdr-750.png" />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button 
                                variant="primary"
                                onClick={ handleClick }
                            >
                                Go Somewhere
                            </Button>
                        </Card.Body>
                    </Card>
                    
const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
    </>
  );                    
                    
*/