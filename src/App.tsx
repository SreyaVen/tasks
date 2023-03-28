import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                style={{ backgroundColor: "purple", padding: "4px" }}
                className="App-header"
            >
                UD CISC275 with React Hooks and TypeScript(This is a Header)
            </header>
<<<<<<< HEAD
            <p></p>
            <Container>
                <Row>
                    <Col>
                        <h1>Sreya website</h1>
                        Edit <code>src/App.tsx</code> and save. This page will
                        automatically reload. Sreya Venkatesh Hello World
                        <div>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </div>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 50,
                                height: 40
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 50,
                                height: 40
                            }}
                        ></div>
                        To-do List:
                        <ol>
                            <li>Get Breakfast</li>
                            <li>Do Homework</li>
                            <li>Practice Piano</li>
                        </ol>
                        <img
                            src="https://excitedcats.com/wp-content/uploads/2020/07/yellow-cat-playing-piano_amenic181-Shutterstock.jpg"
                            alt="Cat playing piano"
                        />
                    </Col>
                </Row>
            </Container>
=======
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
