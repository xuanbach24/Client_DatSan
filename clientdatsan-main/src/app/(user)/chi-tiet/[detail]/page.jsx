import Image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa";

const page = () => {
    return (
        <div className='text-black lg:container py-10 pb-[40px] px-15 lg:px-0 '>
            <div className='py-15 '>
                <h3 className='text-[18px] font-[500] '>
                    Sân Ulis
                </h3>
                <div className=''>
                    <ul className='flex flex-wrap '>
                        <li className='flex items-center '>
                            4.6  <FaStar size={14} className='text-yellow ml-5   ' />
                        </li>
                        <li className='font-bold mx-10'>
                            -
                        </li>
                        <li className='flex items-center '>
                            100 Đánh giá
                        </li>
                        <li className='font-bold mx-10'>
                            -
                        </li>
                        <li className='flex items-center '>
                            Anh Linh
                        </li>
                        <li className='font-bold mx-10'>
                            -
                        </li>
                        <li className='flex items-center '>
                            Số 2 Phạm Văn Đồng
                        </li>
                    </ul>
                </div>
            </div>
            <div className='lg:flex '>
                <div className='lg:w-2/3 lg:mr-20'>
                    <Image src={"/chitietsan.jpeg"} alt="img" width={500} height={500} className='w-full h-auto rounded-5 ' />
                    <div className=' text-right mt-20'>
                        <button className='bg-blue-bold rounded-5 px-15 py-10 uppercase text-white hover:opacity-70 '>
                            Đặt sân ngay
                        </button>
                    </div>
                    <div>
                        <h4 className='text-[18px] uppercase font-[500] py-15 '>
                            Giới thiệu chung
                        </h4>
                        <p className='p-15 shadow-cart'>
                            Sân bóng Ulis. Địa chỉ : Đại học Ngoại ngữ, số 2 Phạm Văn Đồng, Cầu Giấy, Hà Nội. Cụm sân gồm 2 sân bóng 7 người.
                        </p>
                    </div>
                </div>
                <div className='mt-20 lg:w-1/3 lg:mt-0  ' >
                    <h4 className='text-[18px] text-[#f7373a] uppercase font-[500] py-15 lg:pt-0 hover:opacity-70 '>
                        Đặt sân ngay
                    </h4>
                    <p>
                        Bạn vui lòng tải app để đặt sân và xem lịch đặt dễ dàng.
                        Chỉ cần mở điện thoại và quét mã QR dưới đây để sử dụng.
                    </p>
                    <div className='flex justify-between'>
                        <Image src={"/qr.png"} alt='img' width={150} height={150} className='mr-20 w-1/2' />
                        <div className='w-1/2 flex flex-col justify-between py-10' >
                            <Image src={"/app-store.png"} alt='img' width={100} height={100} className=' w-full' />
                            <Image src={"/google-play.png"} alt='img' width={100} height={100} className=' w-full' />
                        </div>
                    </div>
                    <div className=''>
                        <h4 className='text-[18px] my-20 uppercase font-[500] py-15 lg:pt-0 '>
                            Thông tin chủ sân
                        </h4>
                        <div className='shadow-cart p-15 '>
                            <div className='py-15'>
                                chủ sân : Anh Linh
                            </div>
                            <div className='py-15 my-15 bg-blue-bold rounded-5 text-white px-10'>
                                sdt : 097821055998
                            </div>
                            <div className='py-15'>
                                gmail : phungvanlinh195@gmail.com
                            </div>
                            <div className='py-15'>
                                địa chỉ:  Số 2 Phạm Văn Đồng
                            </div>
                            <Image src={"/map.png"} width={200} height={200} alt='img' className='w-full h-auto ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page