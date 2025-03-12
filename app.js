const React = require('react');
const ReactDOM = require('react-dom/client');
import AppLayout from './src/components/Applayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import Body from './src/components/Body';
import RestaurantMenu from './src/components/RestaurantMenu';

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children:[
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path:'/restaurant/:resId',
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    }
   
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>);
