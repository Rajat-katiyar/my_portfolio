export type Project = {
  title: string
  description: string
  link?: string
  demoLink?: string
  tags?: string[]
}

export const projects: Project[] = [
  { 
    title: 'Coffee Shop App', 
    description: 'A modern coffee shop application with menu browsing, order management, shopping cart functionality, and user authentication. Built with React.js and integrated payment gateway.', 
    link: 'https://github.com/Rajat-katiyar/coffee-shop-app',
    demoLink: 'https://coffeeshopapp.vercel.app/',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Payment Integration']
  },
  { 
    title: 'Netflix Clone', 
    description: 'A fully functional Netflix clone with video streaming capabilities, user authentication, movie browsing with categories, search functionality, and personalized recommendations.', 
    link: 'https://github.com/Rajat-katiyar/netflix-clone',
    demoLink: 'https://netflix-clone-lake-five.vercel.app/',
    tags: ['React.js', 'Firebase', 'TMDB API', 'Responsive Design']
  },
  { 
    title: 'Restaurant App', 
    description: 'Complete restaurant management application featuring online ordering, table reservation system, menu management, order tracking, and admin dashboard for restaurant owners.', 
    link: 'https://github.com/Rajat-katiyar/Restaurant-app',
    demoLink: 'https://foodhubapp-gules.vercel.app/',
    tags: ['React.js', 'Node.js', 'Express.js', 'Database Design']
  },
  { 
    title: 'My Portfolio', 
    description: 'Modern, responsive portfolio website built with Next.js showcasing projects, professional experience, skills, and contact information. Features smooth animations and optimized performance.', 
    link: 'https://github.com/Rajat-katiyar/my_portfolio',
    demoLink: 'https://rajatkatiyar.vercel.app/',
    tags: ['Next.js', 'React.js', 'TypeScript', 'Responsive Design']
  },
  { 
    title: 'Online Doctor Appointment System', 
    description: 'Full-stack web application built using MERN stack (MongoDB, Express.js, React.js, Node.js) for managing doctor appointments with user authentication and appointment scheduling.', 
    link: 'https://github.com/Rajat-katiyar',
    demoLink: 'https://onlinedoctorappointmentsystem.vercel.app/',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB']
  },
  { 
    title: 'Responsive E-commerce Website', 
    description: 'A fully responsive e-commerce website with modern UI/UX design, product catalog, shopping cart functionality, and mobile-first approach.', 
    link: 'https://github.com/Rajat-katiyar/Responsive-E-commerce', 
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
  }
]

