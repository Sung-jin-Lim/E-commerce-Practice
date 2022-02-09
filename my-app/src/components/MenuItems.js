import Dropdown from "./menu-items/Dropdown";
export default function MenuItems(props) {
  return (
    <li >
      {props.extra ? (
        <>
          <button>{props.name}</button>
          <Dropdown extra={props.extra} />
        </>
      ) : (
        props.name
      )}
      {/* {props.name} */}
      {/* {props.extra.map((extra, index) => {
        return <li key={index}>{extra.name}</li>
      })} */}
    </ li >
  )

}