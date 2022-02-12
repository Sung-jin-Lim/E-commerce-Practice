import { useState } from 'react'
import Dropdown from "./menu-items/Dropdown";
export default function MenuItems(props) {

  // state for toggle
  const [show, toggleShow] = useState(false);

  // prevents the click event from 
  // bubbling up to the parent
  // function changeState(e) {
  //   e.preventDefault();
  //   toggleShow(!show);
  // }



  return (
    <li >
      {props.extra ? (
        <>
          <button onClick={() => toggleShow((prev) => !prev)}>{props.name}
            {props.desc && <p className="desc" >{props.desc}</p>}</button>


          {/* passes in first submenu */}
          {show && <Dropdown extra={props.extra} dropdown={show} />}
        </>
      ) : (
        props.name
      )
      }
    </ li >
  )

}