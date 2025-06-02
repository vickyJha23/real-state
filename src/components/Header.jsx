import React, {useCallback} from 'react'

import Nav from './Nav'
import Sidebar from './Sidebar'


const Header = () => {
    const [isSidebarVisible, setIsSidebarVisible] = React.useState(false);

     const handleSidebarVisibility = useCallback(() => {
        setIsSidebarVisible(!isSidebarVisible);
     }, [isSidebarVisible]);

     console.log(isSidebarVisible);
  return (
    <header className='h-20 shadow-md'>
        <Nav onClick={handleSidebarVisibility} />     
        <Sidebar isSideVisible={isSidebarVisible} onClick={handleSidebarVisibility} />    
    </header>
  )
}

export default Header
