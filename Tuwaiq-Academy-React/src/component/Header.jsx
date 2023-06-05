import {Link} from 'react-router-dom'

import Logo from "../../public/logo.png"
function Header() {
  return (
    <div >
    <header>
        <div className="logo">
            <img src={Logo} alt="logo" width="80px"/>
        </div>
        <nav>
            <ul className="right">
                <li><Link to ={`/`}>HOME</Link></li>
                <li><a href="./bootcamps.html">BOOTCAMPS</a></li>
            </ul>
        </nav>
    </header>           
    </div>
  )
}

export default Header