import React, { use, useEffect, useState } from 'react';
import { FaEye, FaRegEdit, FaSearchDollar, FaTrashAlt } from 'react-icons/fa';
import { GoArrowLeft } from 'react-icons/go';
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../../Context/AuthContext';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';


const MyPostedTasks = () => {
    const { taskData, category } = useLoaderData();
    const [userTasks, setUserTasks] = useState([])
    const { user } = use(AuthContext)

    const userTaksWithCategory = taskData.map(tasks => {
        const matchCategory = category.find(matchCat => matchCat.categoryName === tasks.category)
        return {
            ...tasks,
            catImg: matchCategory ? matchCategory.catImg : null,
            catName: matchCategory ? matchCategory.categoryName : null
        }
    })
    // console.log(userTaksWithCategory)
    useEffect(() => {
        const userpostTask = userTaksWithCategory.filter(data => data.email === user?.email)
        setUserTasks(userpostTask)
    }, [taskData, category, user])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Delete ? You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://freelance-task-marketplace-sarver.vercel.app/task-delete/${id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Task has been deleted.",
                                icon: "success"
                            });

                            // remove the Tasks from the state
                            const remainingTasks = userTasks.filter(task => task._id !== id);
                            setUserTasks(remainingTasks);
                        }
                    })
            }
        });
    }
    return (
        <>
            <title>Take Task | My Posted Tasks</title>
            <div className="w-10/12 mx-auto mt-10 bg-[url(/assets/bg-banner.jpg)] bg-cover bg-center rounded-2xl">
                <div className="p-10 md:px-40 md:py-11">
                    <h2 className="text-xl text-gray-800 font-semibold">Task Owner : {user && user.displayName}</h2>
                    <p className="text-sm text-gray-600 mb-3">Email : {user && user.email}</p>
                    <p className="text-success">TakeTasks</p>
                    <Link to={'/'}>
                        <button className='flex items-center gap-1.5 p-3 px-5 transition rounded-md bg-[#5BBB7B] hover:bg-[#1F4B3F] hover:text-white border-none'><GoArrowLeft />
                            Go Home
                        </button>
                    </Link>
                </div>
            </div>

            <div className='w-10/12 mx-auto'>

                {
                    userTasks.length
                        ? <div>
                            <div className="mb-4 mt-10 w-10/12 mx-auto">
                                <h2 className="text-3xl font-bold">My All Tasks</h2>
                            </div>
                            <div className="overflow-x-auto w-10/12 mx-auto px-10 my-10">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Task Title</th>
                                            <th>Posted Date</th>
                                            <th>DeadLine</th>
                                            <th>Budget</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        {
                                            userTasks.map(thisUserTasks =>
                                                <tr key={thisUserTasks._id}>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle h-12 w-12">
                                                                    <img src={thisUserTasks.catImg} alt="Catugory image" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">Category Name</div>
                                                                <div className="text-sm opacity-50">{thisUserTasks.catName}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{thisUserTasks.title}</td>
                                                    <td>{thisUserTasks.presentDate}</td>
                                                    <td>{thisUserTasks.deadline}</td>
                                                    <td>${thisUserTasks.budget} / weekly</td>
                                                    <th className='space-x-2'>
                                                        <Link to={`/update-task/${thisUserTasks._id}`}>
                                                            <button className="cursor-pointer px-3 py-2 text-info hover:text-sky-600 transition"
                                                                data-tooltip-id="tooltip-info"
                                                                data-tooltip-content="Edit"
                                                                data-tooltip-variant="info">
                                                                <FaRegEdit size={20} />
                                                            </button>
                                                        </Link>
                                                        <Tooltip id="tooltip-info" />
                                                        <button onClick={() => handleDelete(thisUserTasks._id)} className="cursor-pointer px-3 py-2 text-error hover:text-red-600 transition"
                                                            data-tooltip-id="tooltip-error"
                                                            data-tooltip-content="Delete"
                                                            data-tooltip-variant="error">
                                                            <FaTrashAlt size={20} />
                                                        </button>

                                                        <Tooltip id="tooltip-error" />
                                                        <button onClick={() => document.getElementById(thisUserTasks._id).showModal()} className="cursor-pointer px-3 py-2 text-warning hover:text-amber-600 transition"
                                                            data-tooltip-id="tooltip-warning"
                                                            data-tooltip-content="Click to see Bids"
                                                            data-tooltip-variant="warning">
                                                            <FaSearchDollar size={20} />
                                                        </button>
                                                        <Tooltip id="tooltip-warning" />

                                                        <dialog id={thisUserTasks._id} className="modal">
                                                            <div className="modal-box">
                                                                <h3 className="font-bold text-lg">Hello! {user.displayName}</h3>
                                                                <p className="py-4">Your Total Bids on this Tasks - {!thisUserTasks.totalBids == 0 ? thisUserTasks.totalBids : '0'}</p>
                                                            </div>
                                                            <form method="dialog" className="modal-backdrop">
                                                                <button>close</button>
                                                            </form>
                                                        </dialog>
                                                    </th>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                                {/* Modals */}
                                {/* <button className="btn" onClick={() => document.getElementById('bidsModal').showModal()}>open modal</button> */}

                            </div>
                        </div>
                        : <section className="text-center py-12 my-6 bg-base-100 border border-gray-300 shadow-md rounded-2xl">
                            <h2 className="text-3xl font-bold text-base-content mb-2">You dont Have any Posted Task</h2>
                            <p className="text-base text-gray-500 mb-6">
                                For View and manage Your Posted Tasks you've to post a new Task.
                            </p>
                            <Link to="/add-task">
                                <button className="btn bg-[#5BBB7B] text-base-content">
                                    Post a New Task
                                </button>
                            </Link>
                        </section>
                }



            </div>
        </>
    );
};

export default MyPostedTasks;