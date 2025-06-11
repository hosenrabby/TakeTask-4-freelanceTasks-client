import React from 'react';
import { FaCheckCircle, FaClock, FaBriefcase, FaUserTie } from 'react-icons/fa';
import { BiDollar } from "react-icons/bi";
import { GoArrowRight, GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router';

const FeturedTask = ({ taskData, category }) => {

    const allTaksWithCategory = taskData.map(tasks => {
        const matchCategory = category.find(matchCat => matchCat.categoryName === tasks.category)
        return {
            ...tasks,
            catImg: matchCategory ? matchCategory.catImg : null
        }
    })
    const listsofTasks = allTaksWithCategory.filter(task => task.catImg !== null)

    const show6Task = listsofTasks.slice(0, 6);
    const finalTasks = show6Task.sort((a, b) => {
        const dateA = parseInt(a.deadline.split('/')[2])
        const dateB = parseInt(b.deadline.split('/')[2])
        return dateA - dateB;
    });
    return (
        <>
            <div className="bg-base-200 p-4 md:p-8 pt-10">
                <div className='w-9/12 mx-auto'>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-bold">Featured Tasks</h2>
                        <Link to="/browse-tasks" className="text-md md:text-lg text-blue-600 hover:underline flex gap-3 items-center">
                            Browse All Tasks <GoArrowRight />
                        </Link>
                    </div>

                    <div className="space-y-4 bg-base-100">
                        {finalTasks.map((tasks) => (
                            <div key={tasks._id} className="group flex flex-col md:flex-row items-center justify-between p-4 md:p-10 border-s-2 border-base-100 hover:shadow-md hover:border-s-2 hover:border-[#5BBB7B] transition" >
                                <div className="flex flex-wrap md:flex-row items-center gap-4">
                                    <img src={tasks.catImg} alt="category" className="w-18 h-18 rounded-md" />
                                    <div>
                                        <h3 className="font-semibold">{tasks.title}</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1">
                                            <span className="flex items-center gap-1">
                                                <FaUserTie /> {tasks.userName}
                                                {tasks.verified && <FaCheckCircle className="text-green-500" />}
                                            </span>
                                            <span className="flex items-center gap-1"><FaBriefcase />Starting at:<BiDollar />{tasks.budget}</span>
                                            <span className="flex items-center gap-1"><FaClock /> Dead Line {tasks.deadline}</span>
                                        </div>
                                    </div>
                                </div>
                                <Link to={`/tasks-details/${tasks._id}`}>
                                    <button className='flex items-center gap-3 p-1 md:p-3 px-3 md:px-5 transition rounded-md bg-base-100 border border-gray-700 group-hover:bg-[#5BBB7B] group-hover:text-base-content group-hover:border-[#5BBB7B] cursor-pointer'>View Details<GoArrowUpRight /></button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeturedTask;