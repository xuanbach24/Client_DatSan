"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  const menu = [
    {
      name: "Chính sách",
      href: "/chinh-sach"
    },
    {
      name: "Điều khoản",
      href: "/chinh-sach"
    },
    {
      name: "Dành cho chủ sân",
      href: "/chinh-sach"
    },
    {
      name: "Liên hệ",
      href: "/chinh-sach"
    },
  ]
  
  const [open, setOpen] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // New state for login modal

  const toggleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal); // Toggle login modal
  };

  return (
    <div className='bg-blue-bold text-white '>
      <div className=' border-b border-border'>
        <div className='flex justify-center lg:justify-between lg:container'>
          <Image src={"/logo.png"} alt='logo' width={204} height={60} />
          <div className='hidden lg:flex bg-yellow hover:bg-hover-yellow px-[30px] items-center'>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeXrIOxYh1OFi5kZNF5nZiA8-6r92zLjUU-nT05bBTBTyZXUQ/viewform">
              Chăm sóc khách hàng
            </Link>
          </div>
        </div>
      </div>

      <div className='flex font-[500] lg:container justify-between '>
        <div className='lg:hidden h-[50px] flex items-center justify-center px-[16px] border-r border-border '>
          <FaBars size={24} />
        </div>
        <div className='lg:flex hidden'>
          <div className='text-yellow h-[50px] flex items-center px-15 border-x border-border uppercase'>
            <Link href="/">Trang chủ</Link>
          </div>
          <div className='hover:text-yellow h-[50px] flex items-center px-15 relative group uppercase'>
            <button className='' href="/">Danh sách sân bãi </button>
            <ul className=' hidden group-hover:block absolute top-[50px] left-0 py-10 w-[150px] rounded-10 bg-white text-[#566985] shadow-cart'>
              <li className='px-10 py-10 hover:text-yellow'>
                <Link href='/danh-sach-san/1'>
                  Bóng đá
                </Link>
              </li>
              <li className='px-10 py-10 hover:text-yellow'>
                <Link href='/danh-sach-san/1'>
                  Bóng đá
                </Link>
              </li>
              <li className='px-10 py-10 hover:text-yellow'>
                <Link href='/danh-sach-san/1'>
                  Bóng đá
                </Link>
              </li>
            </ul>
          </div>
          {menu.map((item, index) => (
            <div key={index} className='hover:text-yellow h-[50px] flex items-center px-15 uppercase'>
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
        </div>

        <div className='flex border-r border-border px-15 uppercase'>
          <button className='mr-15 uppercase' onClick={toggleRegisterModal}>
            Đăng ký
          </button>
          <button className='uppercase' onClick={toggleLoginModal}>
            Đăng nhập
          </button>
        </div>
        <button onClick={() => { setOpen(!open) }} className='flex items-center justify-center px-25 uppercase'>
          Tìm kiếm
          <IoSearchSharp className='ml-5' />
        </button>
      </div>

      {showRegisterModal && (
        <div className='modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-10 rounded-10 w-[80%] max-w-md'>
            <h2 className="text-xl font-bold mb-4 ">Đăng ký</h2>
            <form>
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full mb-5 p-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-5 p-3 border border-gray-300 rounded"
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                className="w-full mb-5 p-3 border border-gray-300 rounded"
              />
              <button type="submit" className="bg-blue-bold text-black px-5 py-2 rounded-5 w-full">
                Đăng ký
              </button>
            </form>
            <button
              className="mt-5 bg-gray-300 text-black px-5 py-2 rounded-5"
              onClick={toggleRegisterModal}
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      {showLoginModal && (
        <div className='modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-10 rounded-10 w-[80%] max-w-md'>
            <h2 className="text-xl font-bold mb-4">Đăng nhập</h2>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-5 p-3 border border-gray-300 rounded"
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                className="w-full mb-5 p-3 border border-gray-300 rounded"
              />
              <button type="submit" className="bg-blue-bold text-white px-5 py-2 rounded-5 w-full">
                Đăng nhập
              </button>
            </form>
            <button
              className="mt-5 bg-gray-300 text-black px-5 py-2 rounded-5"
              onClick={toggleLoginModal}
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      {open && (
        <div className='bg-white px-20 py-10'>
          <form action="" className='lg:container lg:flex '>
            <select className='w-full lg:mx-15 rounded-5 px-15 h-[48px] my-15 bg-[#f7f9fb] border border-[#ccc] outline-none text-black'>
              <option value={""}>Lọc theo loại sân</option>
              <option value={""}>Bóng đá</option>
              <option value={""}>Pickleball</option>
            </select>
            <input
              type="text"
              placeholder='Nhập tên sân hoặc địa chỉ để tìm kiếm...'
              className='w-full lg:mx-15 rounded-5 px-15 h-[48px] my-15 bg-[#f7f9fb] border border-[#ccc] outline-none text-black'
            />
            <input
              type="text"
              placeholder='Nhập khu vực...'
              className='w-full lg:mx-15 rounded-5 px-15 h-[48px] my-15 bg-[#f7f9fb] border border-[#ccc] outline-none text-black'
            />
            <button type='submit' className='bg-yellow lg:mx-15 w-full rounded-5 px-15 h-[48px] my-15 border border-[#ccc] outline-none'>
              Tìm kiếm
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Header;
