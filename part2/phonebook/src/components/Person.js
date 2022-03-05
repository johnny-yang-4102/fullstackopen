const Person = ({ person, deletePerson }) => {
    return (
        <div style={{display: 'flex'}}>
            <p>{`${person.name} ${person.number}`}</p>
            <button onClick={deletePerson}>delete</button>

        </div>

    )
}

export default Person