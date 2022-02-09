import LeftCategory from './LeftCategory.js'
import list from './leftcategorydata.js';
export default function LeftContainer() {

  // const extra = list.map(extra => {
  //   return <div >dasdasd</div>
  // })
  return (


    <div className="left-container">
      <button className="Departments">Departments</button>
      {list.map(category => {
        return <LeftCategory key={category.id} id={category.id} name={category.name} extra={category.extra} />
      })}
    </div>
  )
}