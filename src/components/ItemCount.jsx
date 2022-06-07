import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ inicial, max, onAdd }) => {
    const [count, setCount] = useState(inicial)

    const sumar = () => {
        if ( count < max ) {
            setCount(count + 1)
        } else {
            alert('No puedes agregar más productos')
        }
    }
    const restar = () => {
        count > inicial ? setCount(count - 1) : alert('No puedes quitar más productos')
    }


    return (
        <div>
            <h2>{count}</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <br />
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
