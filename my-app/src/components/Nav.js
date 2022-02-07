import logo from '../images/W.png'
import profile from '../images/profile.png'
export default function Nav() {
  return (
    <div className="nav">
      <img className="nav-logo" src={logo} alt="logo" />
      <div className="nav-link">Sell on Shopka</div>
      <div className="nav-link">Register</div>
      <input />
      <div className="nav-link"><span>Consumer Electronics</span></div>
      <button className="signin nav-link">Sign In</button>
      <button className="mycart nav-link">My Cart</button>
      <img src={profile} alt="profile" className='profile' />


    </div>
  )
}