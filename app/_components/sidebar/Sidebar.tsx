'use client'
import React from 'react'
import SidebarHeder from './sidebarHeader/SidebarHeder'
import SidebarSearch from './sidebarSearch/SidebarSearch'
import { CiSquarePlus, CiSquareRemove } from 'react-icons/ci'
import Tippy from '@tippyjs/react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAddUser } from '@/app/_store/features/sidebarSlice'
import { AppDispatch, RootState } from '@/app/_store'
import SidebarChatList from './sidebarFriendsList/SidebarChatList'
import SidebarAddFriendsList from './sidebarFriendsList/SidebarAddFriendsList'

export default function Sidebar() {
    const dispatch: AppDispatch = useDispatch()
    const sidebar = useSelector((state: RootState) => state.sidebar)

    function handleCreateButton() {
        if (!sidebar.isAddUser) {
            dispatch(toggleAddUser(true))
        } else {
            dispatch(toggleAddUser(false))
        }
    }


    return (
        <div className='min-w-[400px] p-2 bg-[#E7F2F8]'>
            <SidebarHeder />
            <div className='flex items-center'>
                <SidebarSearch />
                <Tippy content="This is a tooltip!" placement="top">
                    {sidebar.isAddUser ?
                        <CiSquareRemove
                            onClick={handleCreateButton}
                            className='size-11 text-red-600' />
                        :
                        <CiSquarePlus
                            onClick={handleCreateButton}
                            className='size-11 text-green-600' />
                    }
                </Tippy>
            </div>
            {
                sidebar.isAddUser ?
                    <SidebarAddFriendsList />
                    : <SidebarChatList />
            }
        </div>
    )
}
