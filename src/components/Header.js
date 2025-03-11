import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header =()=>{

    const [loginValue, setLoginValue] = useState('Login');
    return (<div className='header'>
        <div className='logo'>
            <img src={LOGO_URL} alt='logo'/>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <button className='login-btn' onClick={()=>{
                    loginValue === 'Login' ? setLoginValue('Logout') : setLoginValue('Login');
                }}>{loginValue}</button>
            </ul>
        </div>

    </div>)
}

export default Header;