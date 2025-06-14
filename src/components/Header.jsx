import React, {useCallback} from 'react'

import Nav from './Nav'
import Sidebar from './Sidebar'
import RightSidebar from './RightSidebar'


const Header = () => {
    const [isSidebarVisible, setIsSidebarVisible] = React.useState(false);
    const [isRightSidebarVisible, setISRightSidebarVisibility] = React.useState(true);

     const handleSidebarVisibility = useCallback(() => {
        setIsSidebarVisible(!isSidebarVisible);
     }, [isSidebarVisible]);

     const handleRightSidebarVisibility = useCallback(() => {
          setISRightSidebarVisibility(!isRightSidebarVisible);
     }, [isRightSidebarVisible])

     console.log(isSidebarVisible);
  return (
    <header className='h-20 shadow-md w-full flex items-center justify-between px-4'>
        <Nav onClick={handleSidebarVisibility} />     
        <Sidebar isSideVisible={isSidebarVisible} onClick={handleSidebarVisibility} />    
        <RightSidebar isRightSideVisible={isRightSidebarVisible} onClick={handleRightSidebarVisibility} />
    </header>
  )
}

export default Header
