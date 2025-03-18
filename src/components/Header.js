import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    const [loginValue, setLoginValue] = useState('Login');
    const onlineStatus = useOnlineStatus();
    return (<div className='flex justify-between bg-purple-100 shadow-lg'>
        <div className='logo'>
            <img className="w-56" src={LOGO_URL} alt='logo' />
        </div>
        <div className='flex justify-between items-center'>
            <ul className='flex justify-between items-center p-7 m-4'>
                <li className="px-4">{onlineStatus ? "online:🟢" : "offline:🔴"}</li>
                <li className="px-4"><Link to='/'>Home</Link></li>
                <li className="px-4"><Link to='/about'>About</Link></li>
                <li className="px-4"><Link to='/contact' >Contact</Link></li>
                <button className='login-btn' onClick={() => {
                    loginValue === 'Login' ? setLoginValue('Logout') : setLoginValue('Login');
                }}>{loginValue}</button>
            </ul>
        </div>

    </div>)
}

export default Header;