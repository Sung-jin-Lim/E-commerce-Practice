import { useState } from 'react'
import Dropdown from "./menu-items/Dropdown";
export default function MenuItems(props) {

  // state for toggle
  const [show, toggleShow] = useState(false);

  // prevents the click event from 
  // bubbling up to the parent
  function changeState(
    e
  ) {
    e.preventDefault();
    toggleShow(!show);
  }



  return (
    <li >
      {props.extra ? (
        <>
          <button onClick={changeState}>{props.name}</button>
          {/* passes in first submenu */}
          {show && <Dropdown extra={props.extra} />}
        </>
      ) : (
        props.name
      )}
    </ li >
  )

}