import React from "react"

const PersonForm = ({newName, newPhone, handleNameChange, handlePhoneChange, addInfo}) => {
    
    return (
        <div>
            <form onSubmit={addInfo}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    number: <input value={newPhone} onChange={handlePhoneChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm