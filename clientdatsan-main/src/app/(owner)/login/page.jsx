import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className="bg-gray-50 ">
            <div className="flex flex-col items-center justify-center px-20 py-[24px] mx-auto md:h-screen lg:py-0">
                <Link href="/" className="flex items-center mb-20 text-2xl font-semibold  ">
                    ĐẶT SÂN 247
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md p-20  ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6 " action={""}>
                            <div>
                                <label htmlFor="gmail" className="block mb-2 text-sm font-medium  ">Your email</label>
                                <input name="gmail" id="gmail" className="bg-gray-50 outline-none border border-gray-300  rounded-lg   block w-full p-10 " placeholder="name@gmail.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium  ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border outline-none border-gray-300  rounded-lg block w-full p-10 " required />
                            </div>
                            {/* {
                                error &&
                                <NotiError data={error} />
                            }
                            {
                                mes &&
                                <NotiSuccess data={mes} />
                            } */}
                            <button type="submit" className="w-full bg-hoverChapter text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page