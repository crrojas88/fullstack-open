import React from "react";
import Contact from './Contact';

const ContactList = ({ persons }) => {
    return(
        <div>
            <ul>
                {persons.map(person => <li key={person.id}><Contact person={person} /></li>)}
            </ul>
        </div>
    )
}

export default ContactList