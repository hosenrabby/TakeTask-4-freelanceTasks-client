import React, { useState } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { GoArrowLeft } from 'react-icons/go';
import { LuCalendarClock } from 'react-icons/lu';
import PagiantePage from '../../Components/PagiantePage';
import { Link, useLoaderData } from 'react-router';

const BrowseTask = () => {
    const { taskData, category } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const allTaksWithCategory = taskData.map(tasks => {
        const matchCategory = category.find(matchCat => matchCat.categoryName === tasks.category)
        return {
            ...tasks,
            catImg: matchCategory ? matchCategory.catImg : null
        }
    })
    const listsofTasks = allTaksWithCategory.filter(task => task.catImg !== null)

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const finalTasks = listsofTasks.slice(firstIndex, lastIndex);

    return (
        <>
        <title>Take Task | Browse Tasks</title>
            <div className="w-10/12 mx-auto mt-10 bg-[url(/assets/bg-banner.jpg)] bg-cover bg-center rounded-2xl">
                <div className="p-10 md:ps-40 md:py-11 space-y-4">
                    <h1 className="text-3xl font-bold text-black">All Posted Tasks</h1>
                    <p className="text-black text-lg">Mange Tasks and Hire a freelancer for your work</p>
                    <Link to={'/'}>
                        <button className='flex items-center gap-1.5 p-3 px-5 transition rounded-md bg-[#5BBB7B] hover:bg-[#1F4B3F] hover:text-base-content border-none'><GoArrowLeft />
                            Go Back</button>
                    </Link>
                </div>
            </div>

            <div className="mb-4 mt-10 w-10/12 mx-auto">
                <h2 className="text-3xl font-bold">Showing All Tasks</h2>
            </div>
            <div className='w-10/12 mx-auto mb-10 grid grid-cols-1 md:grid-cols-2 gap-3'>
                {
                    finalTasks.map(singleTask =>
                        <div key={singleTask._id} className="card lg:card-side bg-base-100 shadow-md border rounded-lg overflow-hidden">
                            {/* Image */}
                            <figure className="w-full lg:w-1/2 h-72 overflow-hidden">
                                <img src={singleTask.catImg} alt="Service Visual" className="object-cover w-full h-full" />
                            </figure>

                            {/* Card Content */}
                            <div className="card-body w-full lg:w-1/2 p-4">
                                <span className="text-sm text-base-content font-medium">{singleTask.category}</span>
                                <h2 className="card-title text-base-content font-semibold">{singleTask.title}</h2>

                                {/* Rating */}
                                <div className='flex items-center'>
                                    <span className="font-semibol me-2">DeadLine :</span>
                                    <LuCalendarClock className="text-gray-800" />
                                    <span className="ms-1">{singleTask.deadline}</span>
                                </div>

                                <div className="divider my-2"></div>

                                {/* Profile and Price */}
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-2">
                                        {/* <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" className="w-8 h-8 rounded-full" /> */}
                                        <span className="font-semibold">Tasks Owner -</span>
                                        <span className="font-medium">{singleTask.userName}</span>
                                    </div>
                                    <div className="text-base-content flex gap-2 items-center">
                                        Starting at: <span className="text-base-content font-bold flex items-center"><FaDollarSign />{singleTask.budget}</span>
                                    </div>
                                </div>
                                <div className='my-3 '>
                                    <Link to={`/tasks-details/${singleTask._id}`}><button className={`cursor-pointer p-2 px-3 transition rounded-md hover:bg-[#1F4B3F] hover:text-base-content border-none bg-[#5BBB7B]`}>View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='flex justify-center text-base-content mb-10'>
                <PagiantePage
                    className={'text-base-content'}
                    listsofTasks={listsofTasks.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                ></PagiantePage>
            </div>
        </>
    );
};

export default BrowseTask;