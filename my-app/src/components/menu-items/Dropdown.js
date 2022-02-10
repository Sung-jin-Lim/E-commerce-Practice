
export default function Dropdown(props) {
  // logs first submenu
  console.log(props.extra)

  return (
    <ul className="dropdown">
      {/* targets the object in each first submenu */}
      {props.extra.map((menu, index) => (
        <li key={index} className="menuItems">
          <button href="/#">{menu.name}</button>
        </li>
      )

      )}
    </ul>

  )
}