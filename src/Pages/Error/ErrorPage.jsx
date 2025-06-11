import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <>
    <title>Take Task | Page Not Found</title>
      <div className="min-h-[calc(100vh-250px)] bg-base-200 flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-6xl font-bold text-[#5BBB7B] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Oops! Page not found.</h2>
        <p className="text-gray-500 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn btn-success gap-2"
        >
          <FaArrowLeft /> Go Home
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
