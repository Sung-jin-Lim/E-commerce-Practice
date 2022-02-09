export default function Dropdown(props) {
  return (
    <ul className="dropdown">
      {props.extra.map((extra, index) => (
        <li key={index} className="menuItems">
          <a href="/#">{extra.name}</a>
        </li>
      )

      )}
    </ul>

  )
}