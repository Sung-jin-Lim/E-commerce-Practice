export default function LeftCategory(props) {
  // maps each extra category to a div containing the category name


  return (
    <div className='left-category' >
      {props.name}
      <ul>
        {props.extra.map(extra => {
          // if extra exists within this extra map each object within that extra array and return a component that takes in id and name

          return <li key={extra.id}>{extra.name}</li>
        })}
      </ul>
    </ div >
  )

}