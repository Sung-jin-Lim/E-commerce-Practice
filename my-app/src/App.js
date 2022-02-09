import './App.css';
import Nav from './components/Nav.js';
import categories from './components/categories.js';
import React from 'react';
import Category from './components/Category.js';
import Container from './components/Container.js';

function App() {
  const [sqaures, setSquares] = React.useState(categories);

  function click(id) {
    // takes in categories.js array and for each object in the array...
    setSquares((prev) => {
      return (prev.map((object) => {
        // if the object's id matches the id of the square that was clicked...

        return object.id === id ? { ...object, on: !object.on } : { ...object, on: false };

      }));
    });

  }


  // take in the object from categories file and convert each object into a component inside Categories
  const Categories = sqaures.map(category => {
    return <Category key={category.id} img={category.image} id={category.id} name={category.name} on={category.on} toggle={click} />
  })


  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <div className="categories">
          {Categories}
        </div>
      </header>
      <Container />
    </div>
  );
}

export default App;
