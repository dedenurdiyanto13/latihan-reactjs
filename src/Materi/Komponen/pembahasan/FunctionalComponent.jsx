import { useState } from "react";

const FunctionalComponent = ({nama}) => {
    const [value, setValue] = useState(0);

    const handlePlus = () => {
        setValue(value + 1);
    }

    const handleMinus = () => {
        if(value > 0)
        setValue(value - 1);
    }

    return (
        <div>
            <h1>Belajar Component pada {nama}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati accusantium, qui consequuntur quisquam eum, repellendus sunt veritatis architecto ullam esse minima commodi facilis distinctio maiores quam laboriosam possimus aliquid.</p>
            <button onClick={handleMinus}>-</button>
            <span>{' '}{value}{' '}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    ) 
}

FunctionalComponent.defaultProps = {
    nama: 'Programming'
}

export default FunctionalComponent;