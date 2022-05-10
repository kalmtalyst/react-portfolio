import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope,faHome,faMusic } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink exact="true" 
        className='home-link' 
        activeclassname="active" to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink exact="true" 
        className='music-link' activeclassname="active" to='/music'>
     <FontAwesomeIcon icon={faMusic } />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className='contact-link' to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
