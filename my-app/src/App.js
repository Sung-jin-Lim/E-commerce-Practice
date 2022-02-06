import './App.css';
import Nav from './components/Nav.js';
import categories from './components/categories.js';
import Category from './components/Category.js';

function App() {
  // take in the object from categories file and convert each object into a component inside Categories
  const Categories = categories.map(category => {
    return <Category key={category.id} img={category.image} name={category.name} />
  })


  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <div className="categories">
          {Categories}
        </div>
      </header>
    </div>
  );
}

export default App;
