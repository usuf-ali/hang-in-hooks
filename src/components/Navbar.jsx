import React, { useState } from 'react';




const Navbar = () => {
  // All the states
  const [lists, setLists] = useState(['Mim', 'Miria', 'Sam']);
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');



  const handleCounter = () => {
    return setCount(count + 1);
  }
  const handleAddName = () => {
    setLists([...lists, name]);
    setName("");
  }
  return (
    <div>
      <button
        onClick={handleCounter}
      >
        Count: {count}
      </button>
      {lists.map(list => (
        <li key={list}>{list}</li>
      ))}
      <form onSubmit={e => e.preventDefault()}>
        <input
          name=""
          type="text"
          placeholder="Your Name: "
          onChange={e => setName(e.target.value)}
        />
        <button onClick={handleAddName}>Add Name</button>
      </form>
    </div>
  )
}
export default Navbar;
