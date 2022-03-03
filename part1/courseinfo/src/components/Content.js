import React from "react"
import Part from "./Part"

const Content = ({ parts }) => {

    //Returning an array to continually add things.
    const total = parts.reduce((sum, current) => ({ exercises: sum.exercises + current.exercises })).exercises

    return (
        <div>
            {parts.map(part => <Part key={part.id} part={part} />)}
            <p>Total exercises: {total}</p>
        </div>
    )
}

export default Content