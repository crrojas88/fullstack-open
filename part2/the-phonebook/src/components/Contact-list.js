import React from "react";
import Contact from './Contact';

const ContactList = ({ persons, handleDelete }) => {
    return(
        <div>
            <ul>
                {persons.map(person => <li key={person.id}><Contact person={person} handleDelete={() => handleDelete(person.id)} /></li>)}
            </ul>
        </div>
    )
}

export default ContactList