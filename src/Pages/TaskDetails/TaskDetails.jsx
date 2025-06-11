import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { GoArrowLeft } from 'react-icons/go';
import { FaBriefcase, FaCalendarAlt, FaClock, FaIndustry, FaMapMarkerAlt, FaMoneyBillWave, FaUserTie } from "react-icons/fa";
import { toast } from "react-toastify";

const TaskDetails = () => {
    const navigete = useNavigate()
    const { _id, title, deadline, presentDate, budget, description, userName, email, totalBids } = useLoaderData() || {}
    const lastdate = new Date(deadline).toDateString()
    const postDate = new Date(presentDate).toDateString()
    const successNotify = () => toast.success('You are successfully Bid on this Task', { theme: "colored" })

    const handleBids = () => {
        const bidIncr = totalBids + 1 
        const updateBid = { totalBids: bidIncr}
        // console.log(updateBid)
        fetch(`https://freelance-task-marketplace-sarver.vercel.app/update-bids/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBid)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    successNotify()
                }
            })
    }
    return (
        <>
        <title>Take Task | Task Details</title>
            <div className="max-w-10/12 mx-auto mt-10 bg-[url(/assets/freelancer-detail.jpg)] bg-cover bg-center rounded-2xl">
                <div className="p-10 md:px-40 md:py-11 space-y-4 flex flex-col md:flex-row justify-center md:justify-between items-center">
                    <div className="space-x-2">
                        <h2 className="text-xl font-semibold">Task Owner : {userName}</h2>
                        <p className="text-sm text-gray-600 mb-3">Email : {email}</p>
                        <p className="text-success">TakeTasks</p>
                        <p className="text-black mb-2">Task Title: {title}</p>
                        <button onClick={() => navigete(-1)} className='flex items-center gap-1.5 p-3 px-5 transition rounded-md bg-[#5BBB7B] hover:bg-[#1F4B3F] hover:text-white border-none'><GoArrowLeft />
                            Go Back
                        </button>
                    </div>

                    <div className="text-right">
                        <p className="text-sm">Application ends:</p>
                        <p className="font-semibold">{lastdate}</p>
                        <button onClick={handleBids} className="btn btn-success mt-2">Bid Now</button>
                    </div>
                </div>
            </div>

            {/* Job Overview */}
            <div className="mt-6 w-8/12 mx-auto">
                <h3 className="text-2xl font-semibold mb-4">Task Overview</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt size={30} />
                        <span>Date Posted: {postDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt size={30} />
                        <span>Location: New York</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMoneyBillWave size={30} />
                        <span>Budget: ${budget} / week</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaClock size={30} />
                        <span>Expiration Date: {lastdate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaBriefcase size={30} />
                        <span>Experience: 1/2 Years</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaIndustry size={30} />
                        <span>Industry: Software Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaUserTie size={30} />
                        <span>Career Level: Software Engeeniar</span>
                    </div>
                </div>
            </div>
            <div className="border-b border-base-content mx-auto w-8/12 h-[1px] my-2"></div>
            {/* Job Description */}
            <div className="mt-6 mb-8 w-8/12 mx-auto">
                <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                <p className="text-base-content">{description}</p>
            </div>
        </>
    );
};

export default TaskDetails;
