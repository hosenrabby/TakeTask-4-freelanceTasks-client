import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { GoArrowLeft } from "react-icons/go";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdatePost = () => {
    const { _id, title, category, budget, description, userName, email} = useLoaderData() || {}
    const successNotify = () => toast.success('Your Freelace Task Updated successfully', { theme: "colored" })
    const errNotify = () => toast.error('Your Freelace Task Updated successfully', { theme: "colored" })
    const [selectedDate, setSelectedDate] = useState(null);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const formData = Object.fromEntries(form.entries())
        const totalBids = 0;
        const finalData = { ...formData, totalBids }
        // console.log(finalData)

        fetch(`https://freelance-task-marketplace-sarver.vercel.app/update-task/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(finalData)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    successNotify()
                    navigate('/my-posted-tasks')
                } else errNotify()
            })
    };
return (
    <>
        <div className="w-10/12 mx-auto mt-10 bg-[url(/assets/about-bg.jpg)] bg-cover bg-center rounded-2xl">
            <div className="p-10 md:ps-40 space-y-4">
                <h1 className="text-3xl font-bold text-white">Update Task and use friendly for freelancers.</h1>
                <p className="text-gray-300 text-lg">Update Tasks and Hire a freelancer for your work</p>
                <button onClick={() => navigate(-1)} className='flex items-center gap-1.5 p-3 px-5 transition rounded-md bg-[#5BBB7B] hover:bg-[#1F4B3F] hover:text-base-content border-none'><GoArrowLeft />
                    Go Back</button>
            </div>
        </div>
        <div className="mt-14 mb-8">
            <form onSubmit={handleSubmit} className="max-w-8/12 mx-auto p-6 rounded-lg shadow space-y-6 border border-[#5BBB7B]">
                <h2 className="text-2xl font-bold mb-4">Update Your Task</h2>
                {/* Title + Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="label"><span className="label-text">Task Title</span></label>
                        <input type="text" name="title" required className="input input-bordered w-full" defaultValue={title} />
                    </div>
                    <div>
                        <label className="label"><span className="label-text">Category</span></label>
                        <select name="category" required className="select select-bordered w-full" defaultValue={category}>
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
                        <DatePicker required name="deadline" selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat="MM/dd/yyyy" placeholderText="Pick a date" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <label className="label"><span className="label-text">Budget ($)</span></label>
                        <input type="number" name="budget" required min="0" className="input input-bordered w-full" defaultValue={budget} />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="label"><span className="label-text">Description</span></label>
                    <textarea name="description" rows="4" required className="textarea textarea-bordered w-full" defaultValue={description}></textarea>
                </div>

                {/* Read-only Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="label"><span className="label-text">User Name</span></label>
                        <input type="text" readOnly value={userName} name="userName" className="input input-bordered w-full bg-base-200" />
                    </div>
                    <div>
                        <label className="label"><span className="label-text">User Email</span></label>
                        <input type="email" readOnly value={email} name="email" className="input input-bordered w-full bg-base-200" />
                    </div>
                </div>

                <div className="w-8/12 mx-auto">
                    <button className='w-full flex justify-center items-center gap-3 p-3 px-5 transition rounded-md text-base-content font-semibold bg-[#5BBB7B] border border-[#5BBB7B] hover:bg-[#1F4B3F] hover:text-white hover:border-[#1F4B3F] cursor-pointer'>Update This Task</button>
                </div>
            </form>
        </div>
    </>
);
};
export default UpdatePost;