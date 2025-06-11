import { FaBriefcase, FaUserTie, FaLock, FaHeadset } from 'react-icons/fa';

const HowItWorks = () => {
  const features = [
    {
      icon: <FaBriefcase className="text-4xl text-emerald-900" />,
      title: 'Post a job',
      desc: 'It’s free and easy to post a job. Simply fill in a title, description. On Add Tasks',
    },
    {
      icon: <FaUserTie className="text-4xl text-emerald-900"/>,
      title: 'Choose freelancers',
      desc: 'Check Your Bids. And chouse a freelancers Simply on ypur browse section',
    },
    {
      icon: <FaLock className="text-4xl text-emerald-900" />,
      title: 'Pay safely',
      desc: 'Payment are safe with as in any transection.',
    },
    {
      icon: <FaHeadset className="text-4xl text-emerald-900" />,
      title: 'We’re here to help',
      desc: '24/7 we are helping our buyers. who connected with us.',
    },
  ];

  return (
    <div className="text-center py-16 px-4 bg-base-100 ">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Need something done?</h2>
      <p className="text-base-content mb-10">Most viewed and all-time top-selling services</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-base-content text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
