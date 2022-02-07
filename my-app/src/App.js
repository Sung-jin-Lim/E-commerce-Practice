import './App.css';
import Nav from './components/Nav.js';
import categories from './components/categories.js';
import React from 'react';
import Category from './components/Category.js';
import Container from './components/Container.js';

function App() {
  const [sqaures, setSquares] = React.useState(categories);

  function click(id) {
    setSquares((prev) => {
      return (prev.map((object) => {
        if (object.id === id) {
          return { ...object, on: !object.on };
        } else {
          return { ...object, on: false };
        }

        // object.id === id ? { ...object, on: !object.on } : object
      }));
    });
    console.log(id);



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
