
export default function Category(props) {
  return (
    <div className="category">
      <img src={props.img} alt={'random'} />
      <p className="category-name">{props.name}</p>
    </div>
  )
};