
import ProjectCard from './productCard';

const projects = [
  {
    title: 'Simple Hotel Booking Site(MERN)',
		duration: 'Dec 2020 - Jul 2021',
    description:
      'The Simply Hotel Booking Site is a web application designed to streamline the hotel booking process for users. Built with the MERN stack, this application offers a user-friendly interface for both customers and hotel administrators. Key Features: User Registration and Authentication, Search and Filter Options, Booking Management, Responsive Design, Reviews and Ratings',
    technologies: ['React js', 'Node', 'Mongodb','Tailwincss'],
    imageUrl: '/images/Capture.PNG',
    imageAlt: 'The Vendor website',
    url: 'https://mernholidays-oww8.onrender.com/',
  },
	{
    title: 'Administration website (Next js)',
		duration: 'Aug 2021 - Feb 2022',
    description:
      'The Car Company Static Website is a visually appealing and informative web application designed to represent a car company online. Although built with the MERN stack, this website primarily serves static content to showcase the company of offerings, values, and services without complex backend functionalities. The Car Company Static Website serves as a powerful online presence for the car company, effectively showcasing its offerings and values. By utilizing the Next js, this project is structured for potential future enhancements while providing a solid static foundation for users today.',
    technologies: ['Next js', 'SEO', 'JSON','Swiper', 'HighCharts',],
    imageUrl: '/images/hulkcar.PNG',
    imageAlt: 'E-Commerce website',
    url: 'https://hulkcar.vercel.app/',
  },
	{
    title: 'Hotel Room Booking Website (MERN)',
		duration: 'Feb 2023 - Mar 2023',
    description:
      '- I have created a secure and scalable backend that efficiently manages product data, user information, and order processing.\n- The React.js-powered front-end provides a responsive and visually appealing design, making it easy for customers to search, and purchase products. Overall, this MERN-based e-commerce platform delivers a robust and feature-rich solution that streamlines the entire shopping journey.',
    technologies: ['Next js','React js','Tailwincss', 'Node','MongoDB'],
    imageUrl: '/images/hotel-booking.png',
    imageAlt: 'Optimization Static page',
    url: 'https://next-hotel-booking-frontend.vercel.app/',
  },
	{
    title: 'Worldwide Hotel Booking Website (Mern)',
		duration: 'Sep 2023 - Dec 2023',
    description:
      ' The Worldwide Hotel Booking Website is designed to provide travelers with a holistic approach to planning their trips. By integrating hotel bookings with airport transfers, payment solutions, comprehensive hotel guides, and mapping features, this platform enhances user convenience and satisfaction. Leveraging modern web technologies ensures a robust, secure, and user-friendly experience for travelers worldwide. Comprehensive Hotel Booking, Airport Transfer Integration, Convenient booking of airport transfers directly through the platform. Secure Payment Processing, In-depth guides for each hotel, including nearby attractions, dining options, and activities. User-generated content and reviews to enhance the travel experience. Integrated maps for easy navigation to hotels and attractions. Location-based services to help users find nearby amenities. User Account Management,Easy registration and login process with personalized dashboards',
    technologies: ['Reactjs', 'Stripe integration', 'Tailwincss', 'Node', 'SEO','API Integration','mapbox',],
    imageUrl: '/images/agoda.jpg',
    imageAlt: 'Hotel Booking Website',
    url: 'https://www.agoda.com',
  },
	
  // Add more project objects as needed
];

const Products = () => {
  return (
		<section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
			<div className="flex sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
		
			</div>
			<div>
        <h2 className="heading">Project</h2>
				<ul className="group/list">
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							title={project.title}
							duration={project.duration}
							description={project.description}
							technologies={project.technologies}
							imageUrl={project.imageUrl}
							imageAlt={project.imageAlt}
							url={project.url}
						/>
					))}
				</ul>
				</div>
		</section>
  );
};

export default Products;
