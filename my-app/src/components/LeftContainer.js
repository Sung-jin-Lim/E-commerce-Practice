import hamburger from '../images/Vector.png'
import menuItems from './menu-items/menuItems.js';

export default function LeftContainer() {

  // const extra = list.map(extra => {
  //   return <div >dasdasd</div>
  // })
  return (


    <div className="left-container">
      <button className="Departments">
        <img src={hamburger} alt='hamburger' />
        Departments</button>
      <ul className="menus">
        {menuItems.map(menu => {
          return <li key={menu.id}>{menu.name}</li>
        })}
      </ul>
    </div>
  )
}