export type Project = {
  title: string
  description: string
  link?: string
  tags?: string[]
}

export const projects: Project[] = [
  { 
    title: 'Online Doctor Appointment System', 
    description: 'Full-stack web application built using MERN stack (MongoDB, Express.js, React.js, Node.js) for managing doctor appointments with user authentication and appointment scheduling.', 
    link: 'https://github.com/Rajat-katiyar', 
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB']
  },
  { 
    title: 'Responsive E-commerce Website', 
    description: 'A fully responsive e-commerce website with modern UI/UX design, product catalog, shopping cart functionality, and mobile-first approach.', 
    link: 'https://github.com/Rajat-katiyar/Responsive-E-commerce', 
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
  },
  { 
    title: 'Interactive To-Do List', 
    description: 'Dynamic to-do list application with add, edit, delete, and mark complete functionality. Built with modern CSS animations and local storage.', 
    link: 'https://github.com/Rajat-katiyar/To-do-list', 
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage']
  },
  { 
    title: 'Connect4 Game', 
    description: 'Classic Connect4 board game implementation with interactive gameplay, win detection logic, and responsive design for web browsers.', 
    link: 'https://github.com/Rajat-katiyar/connect4', 
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Game Logic']
  },
  { 
    title: 'Landing Page', 
    description: 'Modern, responsive landing page with smooth animations, hero section, and call-to-action elements built with HTML, CSS, and JavaScript.', 
    link: 'https://github.com/Rajat-katiyar/Landing-Page', 
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive']
  },
  { 
    title: 'Calculator Application', 
    description: 'Functional calculator application with basic arithmetic operations, responsive design, and interactive button animations.', 
    link: 'https://github.com/Rajat-katiyar/calculator', 
    tags: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation']
  }
]


