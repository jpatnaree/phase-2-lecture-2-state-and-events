import React, {useState} from "react"

function Pet({pet}){

    const [favorite, setFavorite] = useState(false)
    const [counter, setCounter] = useState(0)
    // let favorite = false

    const buttonClass = favorite ? "favorite-button active" : "favorite-button"
    const star = favorite ? '★' : '☆'

    function updateCounter() {
        setCounter(counter + 1)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            <button onClick={() =>setFavorite(!favorite)} className={buttonClass}>{star}</button>
            <h4>{pet.name}</h4>
            <h1 onClick={updateCounter}>{counter}</h1>
        </li>
    )
/* //////////////////This is Alternative method///////////////////////
        function handleClick() {
            setFavorite((favorite) => !favorite)
        }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            <button onClick={handleClick} className={buttonClass}>{star}</button>
            <h4>{pet.name}</h4>
        </li>
    )
*/
}

export default Pet;