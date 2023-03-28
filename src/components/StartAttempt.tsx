import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [start, setStart] = useState<boolean>(false);
    //let attempts: number = 4;
    function plus(): void {
        setAttempts(attempts + 1);
    }
    function minus(): void {
        setAttempts(attempts - 1);
        setStart(true);
    }

    return (
        <div>
            <div>
                Number of Attempts: <span>{attempts}</span>
            </div>
            <div>
                <Button onClick={minus} disabled={start || attempts === 0}>
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={() => setStart(false)} disabled={!start}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={plus} disabled={start}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
