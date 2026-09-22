import { useState } from "react";

const Nieto3 = ({ obtenerContador }) => {

    const [count, setCount] = useState(0)

    const Increment = () => {
        if (count >= 9) {
            setCount(0)
        } else {
            setCount(count + 1)

        }
    }

    const Decrement = () => {
         if (count == 0) {
            setCount(9)
        } else {
            setCount(count - 1)

        }
    }

    obtenerContador(count)

    return (<div>
        <br />
        <h3>Contador</h3>
        <button type="button" className="btn btn-warning" onClick={Increment}>+</button>
        <button type="button" className="btn btn-warning" onClick={Decrement}>-</button>
        <br />

        <br />

    </div>);
}

export default Nieto3;