import React from 'react'
import SidebarHeder from './sidebarHeader/SidebarHeder'
import SidebarSearch from './sidebarSearch/SidebarSearch'
import SidebarFriendsList from './sidebarFriendsList/SidebarFriendsList'

export default function Sidebar() {
    return (
        <div className='min-w-[400px] p-2 bg-[#E7F2F8]'>
            <SidebarHeder />
            <SidebarSearch />
            <SidebarFriendsList />
        </div>
    )
}
