"use client"
import React, { useContext, useState } from 'react'
import SideBar from '../components/SideBar'
import { useRouter } from 'next/navigation'
// import { AdminConText } from '@/context/adminContext'

import Image from 'next/image'
import MenuYart from '../components/MenuYard'
import BookYard from '../components/BookYard'
import Manageyard from '../components/ManageYard'
import InforUser from '../components/InforUser'

const Page = () => {
    const [tab, setTab] = useState("danh sách đặt sân")
    // const { admin, axiosJwt } = useContext(AdminConText)
    // const router = useRouter()
    // if (typeof window !== 'undefined') {
    //     const admin = localStorage.getItem("admin")
    //     if (!admin) {
    //         return router.push("/kim-login")
    //     }
    // }

    const menuSideBar = [
        {
            name: "Loại sân bãi",
            component: (<MenuYart key={1} />)
        },
        {
            name: "danh sách đặt sân",
            component: (<BookYard key={2} />)
        },
        {
            name: "quản lý sân",
            component: (<Manageyard key={3} />)
        },
        {
            name: "thông tin khách hàng",
            component: (<InforUser key={4} />)
        },
        // {
        //     name: "BÁO LỖI",
        //     component: (<ErrorAdmin admin={admin} axiosJwt={axiosJwt} />)
        // },
        // {
        //     name: "CATEGORY",
        //     component: (<CategoryAdmin admin={admin} axiosJwt={axiosJwt} />)
        // },
        // {
        //     name: "MANAGER CHAPTER",
        //     component: (<ManageChapterAdmin admin={admin} axiosJwt={axiosJwt} />)
        // },
        // {
        //     name: "UPLOAD COMIC",
        //     component: (<ComicAdmin admin={admin} axiosJwt={axiosJwt} />)
        // },
    ]
    return (
        <div>
            <div className='bg-blue-bold text-white '>
                <div className=' border-b'>
                    <div className='flex justify-center lg:justify-between k lg:container'>
                        <Image src={"/logo.png"} alt='logo' width={204} height={60} />
                        <div className='hidden lg:flex bg-yellow hover:bg-hover-yellow px-[30px] items-center'>
                            ADMIN
                        </div>
                    </div>
                </div>
            </div >
            <div className="flex">
                <SideBar tab={tab} setTab={setTab} menuSideBar={menuSideBar} />
                <main className='flex-1'>
                    {menuSideBar.map((item, index) => {
                        if (item.name == tab) {
                            return (item.component)
                        }
                    })}
                </main>
            </div>
        </div>
    )
}

export default Page