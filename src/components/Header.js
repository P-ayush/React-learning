import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    const [loginValue, setLoginValue] = useState('Login');
    const onlineStatus = useOnlineStatus();
    return (<div className='header'>
        <div className='logo'>
            <img src={LOGO_URL} alt='logo' />
        </div>
        <div className='nav-items'>
            <ul>
                <li>{onlineStatus ? "online:🟢" : "offline:🔴"}</li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact' >Contact</Link></li>
                <button className='login-btn' onClick={() => {
                    loginValue === 'Login' ? setLoginValue('Logout') : setLoginValue('Login');
                }}>{loginValue}</button>
            </ul>
        </div>

    </div>)
}

export default Header;