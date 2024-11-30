import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='lg:container  '>
                <div className="py-[80px] px-15 lg:flex lg:container ">
                    <div className="flex  items-center flex-col py-15" >
                        <Image src={"/image_1.png"} alt="img" width={86} height={86} className="mb-20 " />
                        <h3 className="text-[24px] font-[500] mb-[12px]  ">
                            Tìm kiếm vị trí sân
                        </h3>
                        <p className="text-center">
                            Dữ liệu sân đấu dồi dào, liên tục cập nhật, giúp bạn dễ dàng tìm kiếm theo khu vực mong muốn
                        </p>
                    </div>
                    <div className="flex  items-center flex-col py-15" >
                        <Image src={"/image_2.png"} alt="img" width={86} height={86} className="mb-20 " />
                        <h3 className="text-[24px] font-[500] mb-[12px]  ">
                            Đặt lịch online
                        </h3>
                        <p className="text-center">
                            Dữ liệu sân đấu dồi dào, liên tục cập nhật, giúp bạn dễ dàng tìm kiếm theo khu vực mong muốn
                        </p>
                    </div>
                    <div className="flex  items-center flex-col py-15" >
                        <Image src={"/image_3.png"} alt="img" width={86} height={86} className="mb-20 " />
                        <h3 className="text-[24px] font-[500] mb-[12px]  ">
                            Tìm kiếm vị trí sân
                        </h3>
                        <p className="text-center">
                            Dữ liệu sân đấu dồi dào, liên tục cập nhật, giúp bạn dễ dàng tìm kiếm theo khu vực mong muốn
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page