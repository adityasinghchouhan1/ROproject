import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Choose from '../components/Choose';
import Nearby from '../components/Nearby';
import Features from '../components/Features';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import AboutUs from '../components/AboutUs';
import Project from '../components/Project';
import Review from '../components/Review';
import Services from '../components/Services';


export const router = createBrowserRouter([

  
  {
    path: '/',
    element: <App />,
    children: [
    
    
      {
        path: '',
        element: (
          <>
            <Navbar />
            <Hero />
            <Review/>
            <Choose/>
            <Nearby/>
            <Features/>
          <Projects/>
          <Footer/>
          </>
        ),
      },
      {
        path: 'choose',
        element:<Choose/>    
      },
      {
        path: 'Contact',
        element:<Contact/>   
      },
      
      {
        path: '/aboutUs',
        element:<AboutUs/>   
      },
      {
        path: '/project',
        element:<Project/>   
      },
      {
        path: '/services',
        element:<Services/>   
      },
    ],
  },
]);
