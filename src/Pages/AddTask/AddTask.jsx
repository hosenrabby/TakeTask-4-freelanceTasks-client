import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";

const AddTask = () => {
    const {user} = use(AuthContext)
    const successNotify = () => toast.success('Your Freelace Task added to Tasks List successfully', { theme: "colored" })
    const [selectedDate, setSelectedDate] = useState(null);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const formData = Object.fromEntries(form.entries())
        const presentDate = new Date().toLocaleDateString()
        const totalBids = 0;
        const finalData = {...formData,presentDate,totalBids}
        // console.log(finalData)
        fetch('https://freelance-task-marketplace-sarver.vercel.app/add-tasks', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalData)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    successNotify()
                    navigate('/my-posted-tasks')
                }
            })
    };
    return (
        <>
        <title>Take Task | Add Task</title>
            <div className="w-10/12 mx-auto mt-10 bg-[url(/assets/about-bg.jpg)] bg-cover bg-center rounded-2xl">
                <div className="p-10 md:ps-40 space-y-4">
                    <h1 className="text-3xl font-bold text-white">Add a Tasks For Frelancers</h1>
                    <p className="text-gray-300 text-lg">Create a Tasks and Hire a freelancer for your work</p>
                    <button className='flex items-center gap-1.5 p-3 px-5 transition rounded-md bg-[#5BBB7B] hover:bg-[#1F4B3F] hover:text-base-content border-none'><GoArrowLeft />
                        Go Back</button>
                </div>
            </div>
            <div className="mt-14 mb-8">
                <form onSubmit={handleSubmit} className="max-w-8/12 mx-auto p-6 rounded-lg shadow space-y-6 border border-[#5BBB7B]">
                    <h2 className="text-2xl font-bold mb-4">Create a New Task</h2>
                    {/* Title + Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label"><span className="label-text">Task Title</span></label>
                            <input type="text" name="title" required className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label"><span className="label-text">Category</span></label>
                            <select name="category" required className="select select-bordered w-full" >
                                <option value="">Select Category</option>
                                <option>Development & IT</option>
                                <option>Programming & Tech</option>
                                <option>Design & Creative</option>
                                <option>Writing & Translation</option>
                                <option>Degital Marketing</option>
                                <option>Music & Audio</option>
                            </select>
                        </div>
                    </div>

                    {/* Deadline + Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label"><span className="label-text">Select Deadline</span></label>
                            <DatePicker name="deadline" selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat="MM/dd/yyyy" placeholderText="Pick a date" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label"><span className="label-text">Budget ($)</span></label>
                            <input type="number" name="budget" required min="0" className="input input-bordered w-full" />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="label"><span className="label-text">Description</span></label>
                        <textarea name="description" rows="4" required className="textarea textarea-bordered w-full" ></textarea>
                    </div>

                    {/* Read-only Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label"><span className="label-text">User Name</span></label>
                            <input type="text" readOnly value={user && user.displayName} name="userName" className="input input-bordered w-full bg-base-200" />
                        </div>
                        <div>
                            <label className="label"><span className="label-text">User Email</span></label>
                            <input type="email" readOnly value={user && user.email} name="email" className="input input-bordered w-full bg-base-200" />
                        </div>
                    </div>

                    <div className="w-8/12 mx-auto">
                        <button className='w-full flex justify-center items-center gap-3 p-3 px-5 transition rounded-md text-base-content font-semibold bg-[#5BBB7B] border border-[#5BBB7B] hover:bg-[#1F4B3F] hover:text-white hover:border-[#1F4B3F] cursor-pointer'>Create A Task</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddTask;