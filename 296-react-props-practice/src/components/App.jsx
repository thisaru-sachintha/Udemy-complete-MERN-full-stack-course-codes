import React from "react";
import Card from './Card.jsx';
import contacts from '../contacts.js';

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card 
      name={contacts[0].name}
      imgUrl={contacts[0].imgURL}
      tel={contacts[0].phone}
      email={contacts[0].email}/>
      <Card 
      name={contacts[1].name}
      imgUrl={contacts[1].imgURL}
      tel={contacts[1].phone}
      email={contacts[1].email}/>
      <Card 
      name={contacts[2].name}
      imgUrl={contacts[2].imgURL}
      tel={contacts[2].phone}
      email={contacts[2].email}/>
    </div>
  );
}

export default App;
