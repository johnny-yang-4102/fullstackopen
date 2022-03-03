//Filter

import React from "react"


const Persons = ({persons}) => {
    
    console.log(persons)
    return (
      <div>
          {persons.map(p => <p key={p.id}>{p.name} {p.number}</p>)}
      </div>
    )
  }
  
  export default Persons