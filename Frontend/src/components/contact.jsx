import React from 'react'
import Navbar from './Navbar'

function contact() {
    return (
        <>
            <div>
                <Navbar/>
            <div className="flex h-screen items-center justify-center mt-7">
                    <div id="my_modal_3" className="w-[500px] ">
                        <div className=" dark:bg-slate-900 dark:text-white modal-box">
                            <form method="div">


                                <h3 className="font-bold text-3xl">Contact us</h3>
                                <div className="mt-7 space-y-2">
                                    <span>Name:"</span><br />
                                    <input type="text" placeholder="Enter your name" className="w-80 px-3 border rounded outline-none" />
                                </div>
                                <div className="mt-7 space-y-2">
                                    <span>Email:"</span><br />
                                    <input type="email" placeholder="Enter your email" className="w-80 px-3 border rounded outline-none" />

                                </div>
                                <div className="mt-7">
                                    <span>Message:"</span><br />
                                    <textarea type="text" rows="4" placeholder="Enter your message" className="w-80  px-3 border rounded outline-none" />
                                </div>
                                <div className="flex  mt-6">
                                    <button className="bg-blue-500 rounded-md px-5 py-2 hover:bg-blue-700">Submit
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default contact
