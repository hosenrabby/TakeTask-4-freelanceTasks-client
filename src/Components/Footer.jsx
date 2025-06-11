import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-10 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {/* Logo Section */}
                <div className="md:col-span-1">
                    <div className='flex items-center gap-2'>
                        <img className='w-1/6 rounded-lg' src="assets/taktask-fav.png" alt="" />
                        <h2 className="mt-4 text-2xl font-bold text-white mb-4">TakeTask</h2>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <FaFacebookF className="hover:text-white cursor-pointer" />
                        <FaTwitter className="hover:text-white cursor-pointer" />
                        <FaGooglePlusG className="hover:text-white cursor-pointer" />
                        <FaLinkedinIn className="hover:text-white cursor-pointer" />
                    </div>
                </div>

                {/* For Candidates */}
                <div>
                    <h3 className="text-white font-semibold mb-2">For Candidates</h3>
                    <ul className="space-y-1">
                        <li><Link to="/browse-tasks" className="hover:underline">Browse Tasks</Link></li>
                        <li><Link to="/add-task" className="hover:underline">Add Task</Link></li>
                        <li><Link to="/my-posted-tasks" className="hover:underline">My Tasks</Link></li>
                    </ul>
                </div>

                {/* For Employers */}
                <div>
                    <h3 className="text-white font-semibold mb-2">For Employers</h3>
                    <ul className="space-y-1">
                        <li><Link to="/candidates" className="hover:underline">Browse Frelancers</Link></li>
                        <li><Link to="/post-job" className="hover:underline">Post a Tasks</Link></li>
                        <li><Link to="/pricing" className="hover:underline">Plans & Pricing</Link></li>
                    </ul>
                </div>

                {/* Helpful Links */}
                <div>
                    <h3 className="text-white font-semibold mb-2">Helpful Links</h3>
                    <ul className="space-y-1">
                        <li><Link to="/contact-us" className="hover:underline">Contact</Link></li>
                        <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:underline">Terms of Use</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.94 6.94a1.5 1.5 0 012.12 0l4.95 4.95 4.95-4.95a1.5 1.5 0 112.12 2.12l-6.01 6.01a1.5 1.5 0 01-2.12 0L2.94 9.06a1.5 1.5 0 010-2.12z" /></svg>
                        Sign Up For a Newsletter
                    </h3>
                    <p className="text-sm mb-4">Weekly breaking news, analysis and job advice.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="input input-bordered w-full bg-gray-800 text-white border-gray-700"
                        />
                        <button className="btn btn-primary ml-2">
                            <FaArrowUp />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-800 mt-10 py-4 text-center text-sm text-gray-500">
                © 2019 <span className="text-white font-semibold">TakeTask</span>. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
