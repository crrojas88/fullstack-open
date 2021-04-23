import React from "react";

const Contact = ({ person, handleDelete }) => {
    return(
        <div>
            {person.name} - {person.number}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Contact