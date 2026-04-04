import { useState } from "react";

export default function Ludo() {
    const [ludo, setLudo] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });
    const [count, setcount] = useState(0);

    let diceRoll = () => {
        setcount(Math.floor(Math.random() * 6) + 1);
    };

    return (
        <div>
            <p>This is ludo dice</p>

            <p>Dice Count = {count}</p>

            <p>BlueMove</p>
            <button onClick={diceRoll} style={{ backgroundColor: "blue" }}>+1</button>

            <p>RedMove </p>
            <button onClick={diceRoll} style={{ backgroundColor: "red" }}>+1</button>

            <p>GreenMove </p>
            <button onClick={diceRoll} style={{ backgroundColor: "green" }}>+1</button>

            <p>YellowMove </p>
            <button onClick={diceRoll} style={{ backgroundColor: "yellow" }}>+1</button>
        </div>
    );
}
