import RightContainer from './RightContainer.js';
import LeftContainer from './LeftContainer.js';

export default function Container() {
  return (
    <div className="container">
      <LeftContainer />

      <RightContainer />
    </div>
  )
}