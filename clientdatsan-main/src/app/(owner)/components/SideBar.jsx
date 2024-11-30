"use client"
import Link from 'next/link'
// import { AdminConText } from '@/context/adminContext'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const SideBar = ({ setTab, tab, menuSideBar }) => {

    // const { logoutAdmin } = useContext(AdminConText)
    // const router = useRouter()
    // const logOut = () => {
    //     logoutAdmin()
    //     router.push("/kim-login")
    // }
    return (
        <div className='bg-black text-[#637381] p-20 pt-[40px]  min-h-screen text-[18px] font-bold '>
            <Link href='/' className='py-20 cursor-pointer' >TRANG CHỦ</Link>
            <ul className='py-20  '>
                {
                    menuSideBar.map((item, index) => {
                        return (
                            <li onClick={() => { setTab(item.name) }} className={`${tab == item.name && "text-white"} py-20 cursor-pointer`} key={index}>{item.name}</li>
                        )
                    })
                }
                <li className='py-20 cursor-pointer'>
                    Đăng Xuất
                </li>
            </ul>
        </div>
    )
}

export default SideBar