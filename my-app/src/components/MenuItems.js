import { useState } from 'react'
import Dropdown from "./menu-items/Dropdown";
export default function MenuItems(props) {

  // state for toggle
  const [show, toggleShow] = useState(false);


  // const [overflow, toggleOverflow] = useState(false);

  return (

    <li className={show ? 'menuList liOn' : 'menuList liOff'} >
      {/* if props.extra.length > 3 console.log(bigger than 3) */}
      {props.extra ? (


        <>
          {/* {props.extra.length > 3 ? ((console.log('bigger than 3'))) : (console.log('nope'))} */}
          <button onClick={() => toggleShow((prev) => !prev)}>
            {props.name}
            {props.desc && <p className="desc" >{props.desc}</p>}
          </button>



          {/* passes in first submenu */}
          {show && <Dropdown extra={props.extra} dropdown={show} />}

        </>
      ) :
        (<button>{props.name}{props.desc && <p className="desc" >{props.desc}</p>}</button>)
      }
    </ li >
  )

}