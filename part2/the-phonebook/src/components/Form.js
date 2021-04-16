import React from "react";

const Form = ({ addContact, newName, newNumber, handleChange }) => {
    return(
        <div>
            <form onSubmit={addContact}>
        <div>
          Name: <input name='newName' value={newName} onChange={handleChange}/>
        </div>
        <div>
          Number: <input name='newNumber' value={newNumber} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
        </div>
    )
}

export default Form