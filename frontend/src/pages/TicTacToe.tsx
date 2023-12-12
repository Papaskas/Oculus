import React, { useState } from 'react';
import css from "@/styles/TicTacToe.module.scss";
import {Button} from 'react-bootstrap';

function TicTacToe(): React.JSX.Element {
    const [squares, setSquares] = useState<Array<'X' | 'O' | null>>(Array(9).fill(null));
    const [currentSign, setSign] = useState<'X' | 'O' | null>('X');

    const onSquareClick = (index: number): void => {
        if (squares[index] || calculateWinner(squares)) {
            return;
        }

        const currentSquare:('X' | 'O' | null)[] = squares.slice();
        const sign: 'X' | 'O' = currentSign === 'X' ? 'O' : 'X';

        currentSquare[index] = sign;
        setSign(sign);
        setSquares(currentSquare);
    };

    const Square = ({index}: { index: number }): React.JSX.Element => {
        return <button
            className={"btn btn-primary " + css.square}
            onClick={() => onSquareClick(index)}
        >
            { squares[index] }
        </button>
    };

    return (
        <>
            <div className={css.board}>
                <Square index={0} />
                <Square index={1} />
                <Square index={2} />
                <Square index={3} />
                <Square index={4} />
                <Square index={5} />
                <Square index={6} />
                <Square index={7} />
                <Square index={8} />
            </div>

            <div className="d-flex justify-content-center">
                <Button variant="primary" className="mt-4" onClick={ () => window.location.reload() }>Reload game</Button>
            </div>
        </>
    );
}

const calculateWinner = (squares: ('X' | 'O' | null)[]) => {
    const lines: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default TicTacToe;