import hamburger from '../images/Vector.png'
import menuItems from './menu-items/menuItems.js';
import MenuItems from './MenuItems.js';

export default function LeftContainer() {

  // const extra = list.map(extra => {
  //   return <div >dasdasd</div>
  // })
  return (


    <div className="left-container">
      <button className="Departments button">
        <img src={hamburger} alt='hamburger' />
        Departments</button>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return <MenuItems key={index} name={menu.name} desc={menu.desc} extra={menu.submenu} />
        })}
      </ul>
    </div>
  )
}