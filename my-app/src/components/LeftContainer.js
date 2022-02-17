import hamburger from '../images/Vector.png'
import menuItems from './menu-items/menuItems.js';
import MenuItems from './MenuItems.js';
import React from 'react'

export default function LeftContainer() {



  const [filterOn, setFilter] = React.useState(false);
  return (


    <div className="left-container">
      <button className="Departments button">
        <img src={hamburger} alt='hamburger' />
        Departments</button>
      <ul className="menus" >
        {menuItems.map((menu, index) => (

          <MenuItems key={index} name={menu.name} desc={menu.desc} extra={menu.submenu} number={index} />
        )
        )}
      </ul>
      <button onClick={() => setFilter((prev) => !prev)}>Collasped Filters</button>
      {filterOn && <div className="filter-container">
        <div className="expanded" onClick>
          <button>Expanded Filters</button>
          <ul>
            <li>Recommended</li>
            <li>REcently Added</li>
            <li>Expiring Soon</li>
            <li>Most Rated</li>
            <li>Price: Low - High</li>
            <li>Price: High - Low</li>
          </ul>
        </div>
        <div className="year">
          <button>Year of Manufacturing</button>
          <ul>
            <li>1954</li>
            <li>1955</li>
            <li>1956</li>
            <li>1957</li>
            <li>1958</li>
            <li>1959</li>
            <li>1960</li>
            <li>1961</li>
            <li>1962-2020</li>
          </ul>
        </div>
      </div>}

    </div>

  )
}