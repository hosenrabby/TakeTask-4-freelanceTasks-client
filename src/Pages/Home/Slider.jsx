import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router';
import { CiSearch } from 'react-icons/ci';

const Slider = () => {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper min-h-[calc(100vh-80px)] mt-[-98px] md:mt-[-149px] lg:mt-[-100px]"
            >
                <div
                    slot="container-start"
                    className="parallax-bg bg-linear-to-tr from-black to-white opacity-65 "
                    style={{
                        'backgroundImage':
                            'url(assets/slider1.jpg)',
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide className='md:mt-36 md:ms-32'>
                    <div className="mt-20 md:mt-0 md:text-left md:w-6/12">
                        <h1 className="text-4xl md:text-5xl font-bold coiny-regular text-white">Hire the best freelancers for <br /> any job, online.</h1>

                        <p className="mt-4 text-white max-w-xl"> Millions of people use freeio.com to turn their ideas into reality.</p>

                        <div className="mt-8 bg-white rounded-lg shadow-lg p-3 flex flex-col md:flex-row items-center gap-4">
                            <div className="flex items-center  px-4 py-2 w-full md:w-1/2">
                                <CiSearch className="text-gray-800" />
                                <div className="flex items-center px-4 w-full">
                                    <input type="text" placeholder="What are you looking for ?" className="w-full outline-none text-sm text-gray-800 border-r-1" />
                                </div>
                            </div>
                            <div className="flex items-center px-4 py-2 w-full md:w-1/2">
                                <select defaultValue="Pick a font" className="select select-ghost text-gray-800">
                                    <option >Category</option>
                                    <option>Design & Creative</option>
                                    <option>Development & IT</option>
                                    <option>Degital Markating</option>
                                    <option>Finance & Accounting</option>
                                    <option>Life Style</option>
                                    <option>Music Audio</option>
                                </select>
                            </div>
                            <button className='p-4 px-5 transition rounded-md bg-[#5BBB7B] hover:bg-[#1F4B3F] hover:text-white border-none'>Search</button>
                        </div>

                        <div className="mt-6 text-sm text-white">
                            <span className="font-medium">Popular Searches:</span>{' '}
                            <Link to="/" className="underline text-white">Designer</Link>,{' '}
                            <Link to="/" className="underline text-white">Web</Link>,{' '}
                            <Link to="/" className="underline text-white">IOS</Link>,{' '}
                            <Link to="/" className="underline text-white">Developer</Link>,{' '}
                            <Link to="/" className="underline text-white">NodeJS</Link>,{' '}
                            <Link to="/r" className="underline text-white">Senior</Link>,{' '}
                            <Link to="/" className="underline text-white">Engineer</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='md:mt-36 md:ms-32'>
                    <div className="mt-20 md:mt-0 md:text-left md:w-6/12">
                        <h1 className="text-4xl md:text-5xl font-bold coiny-regular text-white">Browse our feture Task here for<br /> your freelance carrier.</h1>

                        <p className="mt-4 text-white max-w-xl">Highly recommended freelance tasks include web development, graphic design, content writing, and digital marketing. These areas offer strong demand, good pay, and opportunities for growth. Mobile app development, virtual assistance, and video editing are also in high demand.</p>
                        <button className='mt-5 p-4 transition rounded-md bg-[#5BBB7B] hover:bg-[#1F4B3F] hover:text-white border-none'>Browse Tasks</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='md:mt-36 md:ms-10'>
                    <div className="mt-20 md:mt-0 md:text-left md:w-6/12">
                        <h1 className="text-4xl md:text-5xl font-bold coiny-regular text-white">Add a Task for your works and chance to get<br />Our Best and profetional freelancers.</h1>

                        <p className="mt-4 text-white max-w-xl">Hiring a professional freelancer ensures high-quality work, specialized skills, and flexibility. They bring experience, meet deadlines, and adapt to your project needs, making them a cost-effective solution for businesses seeking expert support without long-term commitments..</p>
                        <button className='mt-5 p-4 transition rounded-md bg-[#5BBB7B] hover:bg-[#1F4B3F] hover:text-white border-none'>Add Task</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;