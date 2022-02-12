
import MenuItems from '../MenuItems';
export default function Dropdown(props) {
  // logs first submenu

  return (

    <ul className="dropdown">

      {/* targets the object in each first submenu */}
      {props.extra.map((menu, index) => (
        <MenuItems key={index} name={menu.name} desc={menu.desc} extra={menu.submenu} />
      )

      )}
    </ul>

  )
}