import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaStar } from "react-icons/fa";

const page = () => {
    const menu = [
        {
            name: "Bóng đá"
        },
        {
            name: "Bóng đá"
        },
        {
            name: "Bóng đá"
        },
        {
            name: "Bóng đá"
        },
        {
            name: "Bóng đá"
        },
    ]
    return (
        <div className='lg:container px-15 py-20  lg:px-0 lg:flex    ' >
            <div className='lg:mr-30 lg:w-1/4'>
                <div className='p-25 pb-15 shadow-cart    '>
                    <h3 className='pb-15  mb-20 border-b text-[16px] text-[#183c7d] font-bold '>Danh sách sân bãi</h3>
                    <ul>
                        {
                            menu.map((item, index) => {
                                return (
                                    <li key={index} className='text-[#1976d2] hover:text-yellow pb-10 mb-15  '>
                                        {
                                            item.name
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className='lg:w-3/4 '>
                <div className='flex flex-col justify-center items-center p-20 mt-20'>
                    <div className="flex items-center">
                        <FaStar size={14} />
                        <FaStar size={24} className="text-yellow mx-15" />
                        <FaStar size={14} />
                    </div>
                    <h3 className='text-[24px] text-[#183c7d] font-[500] my-15 text-nowrap '>Danh sách sân bãi</h3>
                    <span className="h-[4px] w-[50px] bg-[#3aaced] rounded-3  "></span>
                </div>
                <div className='flex flex-wrap '>
                    {
                        menu.map((item, index) => {
                            return (
                                <div key={index} className='w-full  lg:w-1/3 lg:px-10 mb-20     '>
                                    <div className='shadow-cart p-15  rounded-20  overflow-hidden  '>
                                        <div className='rounded-t-15  overflow-hidden '>
                                            <Image src={"/san.jpg"} alt='img' width={200} height={200} className='w-full' />
                                        </div>
                                        <div className='mt-10'>
                                            <Link className='text-[18px] text-[#183c7d] font-[500]' href="/"> Sân Ulis
                                            </Link>
                                        </div>
                                        <div className='py-10 '>
                                            <span>0978210895 - Anh Linh</span>
                                        </div>
                                        <div className=' '>
                                            Số 2 Phạm Văn Đồng
                                        </div>
                                        <div className='text-center mt-25 mb-15 '>
                                            <Link href='/chi-tiet/1' className=' bg-blue-bold px-15 py-10 rounded-5 text-white  '>
                                                Chi tiết
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default page