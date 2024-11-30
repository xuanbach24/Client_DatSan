import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='bg-blue-bold text-white'>
                <div className='lg:container lg:flex px-15 lg:px-0 py-[40px] '>
                    <div className='py-10 lg mr-20 lg:w-1/3  '>
                        <h3 className='pb-25 mb-30 border-b border-border font-[500] uppercase '>
                            Giới thiệu
                        </h3>
                        <p className='mb-20 '>
                            Đặt sân 247 cung cấp các tiện ích thông minh giúp cho bạn tìm sân bãi và đặt sân một
                            cách hiệu quả nhất.
                        </p>
                        <ul className='text-[13px] pb-15 mb-20 border-b border-border '>
                            <li className='py-10 '>
                                Chính sách bảo mật
                            </li>
                            <li className='py-10 '>
                                Chính sách huỷ (đổi trả)
                            </li>
                            <li className='py-10 '>
                                Chính sách kiểm hàng
                            </li>
                            <li className='py-10 '>
                                Chính sách thanh toán
                            </li>
                        </ul>
                    </div>
                    <div className='py-10  mr-20 lg:w-1/3  '>
                        <h3 className='pb-25 mb-30 border-b border-border font-[500] uppercase '>
                            Thông tin
                        </h3>
                        <ul className='text-[13px] '>
                            <li className='py-10'>
                                Công ty Cổ phần Booking 247
                            </li>
                            <li className='py-10 flex  '>
                                <span className='text-[14px] opacity-70 mr-5'> MST :</span>  Công ty Cổ phần Booking 247
                            </li>
                            <li className='py-10 flex  '>
                                <span className='text-[14px] opacity-70 mr-5'>  Mail :</span> contact@datsan247.com
                            </li>
                            <li className='py-10   '>
                                <span className='text-[14px] opacity-70 mr-5 text-nowrap'> Địa chỉ :</span> Số 3 ngõ 612/34/15 Đường La Thành, Phường Giảng Võ, Quận Ba Đình, Thành phố Hà Nội, Việt Nam
                            </li>
                            <li className='py-10 flex  '>
                                <span className='text-[14px] opacity-70 mr-5'>  Điện thoại :</span>  0247.303.0247
                            </li>
                            <li className='py-10 flex  '>
                                Giấy phép ĐKKD số 0110175404 do Sở Kế hoạch và Đầu  tư thành phố Hà Nội Cấp ngày 08/11/2022
                            </li>
                        </ul>

                    </div>
                    <div className='py-10 lg:w-1/3  '>
                        <h3 className='pb-25 mb-30 border-b border-border font-[500] uppercase '>
                            Liên hệ
                        </h3>
                        <div className='text-[13px]  p-15 bg-[rgba(0,0,0,.04)] shadow-cart '>
                            <div>
                                <h4 className='mb-15'>Chăm sóc khách hàng: </h4>
                                <h4 className='mb-20  text-[#3aaced] '>0247.303.0247 </h4>
                            </div>
                            <button className='bg-yellow rounded-5 px-20 py-10   '>Gọi ngay </button>
                        </div>

                    </div>

                </div>
            </div>
            <div className='bg-[#061b41]  '>
                <div className='lg:container p-15 lg:flex justify-between lg:py-[30px] lg:px-0  text-white text-[13px]'>
                    <h3 className='py-15  lg:py-0'>
                        © Datsan247 2021 . Toàn bộ bản quyền thuộc Datsan247.
                    </h3>
                    <div className='flex justify-center flex-wrap py-15 lg:py-0 '>
                        <div className='px-15'>
                            Điều khoản
                        </div>
                        <div className='px-15'>
                            Chính sách
                        </div>
                        <div className='px-15'>
                            Giới thiệu
                        </div>
                        <div className='px-15'>
                            Dành cho chủ sân
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer