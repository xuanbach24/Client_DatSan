"use client"
// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
// import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'

const MenuYart = ({ admin, axiosJwt }) => {

    // const [valueSearch, setValueSearch] = useState("")
    // const [dataSearch, setDataSearch] = useState(null)

    // const getData = async () => {
    //     try {
    //         const res = await axios.get(process.env.url_backend_axios + '/slider')
    //         return res.data.data
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // const { data, isLoading } = useQuery({
    //     queryKey: ['dataSlider'],
    //     queryFn: () => getData(),
    //     staleTime: 60 * 1000,
    // })


    // const { mutateAsync, isPending } = useMutation({
    //     mutationFn: () => axios.get(process.env.url_backend_axios + `/story/fillter/?q=${valueSearch}`)
    // })
    // const searchComic = async () => {
    //     try {
    //         mutateAsync().then(res => {
    //             setDataSearch(res.data.data)
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // const queryClient = useQueryClient()

    // const postSlider = async (id) => {
    //     try {

    //         await axiosJwt.put(process.env.url_backend_axios + `/slider/${id}`, {}, {
    //             headers: { token: admin.token }
    //         })
    //         queryClient.invalidateQueries({ queryKey: ['dataSlider'] })
    //     } catch (error) {
    //         alert('đăng truyện thất bại')
    //         console.log(error);
    //     }
    // }
    // const deleteslider = async (id) => {
    //     try {
    //         const res = await axiosJwt.put(process.env.url_backend_axios + `/slider/delete/${id}`, {}, {
    //             headers: { token: admin.token }
    //         })
    //         queryClient.invalidateQueries({ queryKey: ['dataSlider'] })
    //     } catch (error) {
    //         console.log(error);
    //         alert('deleteslider thất bại')
    //     }
    // }

    return (
        <div className='text-14 bg-gray-50 min-h-screen' >
            <h2 className='text-20 text-center  font-bold py-[30px] bg-blue-bold text-white  '>danh sách sân bãi</h2>
            {
                <div className="relative px-[100px] mt-25   sm:rounded-lg">
                    <table className="w-full shadow-md text-[14px] text-left  text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-20 py-15">
                                    Mã Sân
                                </th>
                                <th scope="col" className="px-20 py-15">
                                    Tên loại sân
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
                                    sân đá bóng
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

export default MenuYart