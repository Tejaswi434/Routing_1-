import {Link} from 'react-router-dom'

const Header = () => {
  ;<div>
    <div>
      <div className="first_part">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
          alt="wave"
        />
        <h1>Wave</h1>
      </div>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
        </li>
      </ul>
    </div>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png "
        alt="home"
      />
    </div>
  </div>
}

export default Header
