"use client"
// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
// import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'

const Manageyard = ({ admin, axiosJwt }) => {

    return (
        <div className='text-14 bg-gray-50 min-h-screen' >
            <h2 className='text-20 text-center  font-bold py-[30px] bg-blue-bold text-white  '>danh sách sân</h2>
            {
                <div className="relative px-[100px] mt-25   sm:rounded-lg">
                    <table className="w-full shadow-md text-[14px] text-left  text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-20 py-15">
                                    Mã sân
                                </th>
                                <th scope="col" className="px-20 py-15">
                                    tên sân
                                </th>
                                <th scope="col" className="px-20 py-15">
                                    tình trạng
                                </th>
                                <th scope="col" className="px-20 py-15">
                                    mã loại
                                </th>
                                <th scope="col" className="px-20 py-15">
                                    giá thuê 1h
                                </th>
                                <th scope="col" className="px-20 py-15">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                                <th scope="row" className="px-20 py-15 font-medium text-gray-900 whitespace-nowrap ">
                                    001
                                </th>
                                <td className="px-20 py-15">
                                    sân đom đóm
                                </td>
                                <th scope="row" className="px-20 py-15 font-medium text-gray-900 whitespace-nowrap ">
                                    hoạt động
                                </th>
                                <td className="px-20 py-15">
                                    003
                                </td>
                                <td className="px-20 py-15">
                                    200000đ
                                </td>
                                <td className="px-20 py-15">
                                    <button className="font-bold text-red-500 hover:underline">XÓA</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            }

        </div>

    )
}

export default Manageyard