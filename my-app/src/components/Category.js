
import React from 'react';
export default function Category(props) {

  // const [clicked, switchClicked] = React.useState(props.on);

  const style = {
    backgroundColor: props.on ? '#EBF2FF' : 'white',
    color: props.on ? '#2979ff' : 'gray'
  }

  const iconStyle = {
    filter: props.on ? 'brightness(0) saturate(100%) invert(33%) sepia(89%) saturate(2777%) hue-rotate(211deg) brightness(109%) contrast(101%)' : 'brightness(1) saturate(0)',
  }

  // function click() {
  //   console.log(!clicked);

  //   switchClicked(!clicked);


  // }

  return (
    <div className="category" onClick={() => props.toggle(props.id)} style={style}>
      <img src={props.img} alt={'random'} style={iconStyle} />
      <p className="category-name">{props.name}</p>
    </div >
  )
};