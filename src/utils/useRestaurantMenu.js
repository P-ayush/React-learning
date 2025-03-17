import { useEffect, useState } from 'react';
import { MENU_API } from './constants';

const useRestrauntMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async ()=>{
        const data = await fetch(MENU_API + resId);
        const response = await data.json();
        setResInfo(response)
    }

    return resInfo
}

export default useRestrauntMenu;