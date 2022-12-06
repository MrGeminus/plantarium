import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Default from "../layouts/Default";
import Home from '../pages/home/Home';
import ProductDetails from '../pages/productdetails/ProductDetails';
import About from '../pages/about/About';
import Blog from '../pages/blog/Blog';
import Post from '../pages/post/Post';
import Careers from '../pages/careers/Careers';
import Contact from '../pages/contact/Contact';
import Faq from '../pages/faq/Faq';
import Tos from '../pages/tos/Tos';
import PrivacyPolicy from '../pages/privacypolicy/PrivacyPolicy';
import CookiePolicy from '../pages/cookiepolicy/CookiePolicy';
import Checkout from '../pages/checkout/Checkout';
import Profile from '../pages/profile/Profile';
import PasswordRecovery from '../pages/passwordrecovery/PasswordRecovery';
import NotFound from '../pages/notfound/NotFound';

const Router = () => {
    return useRoutes([
        {
            path: '/:lang',
            element: <Default />,
            children: [
                {
                    path: '/:lang/',
                    element: <Home />,
                },
                {
                    path: '/:lang/products/:productId',
                    element: <ProductDetails />,
                },
                {
                    path: '/:lang/about',
                    element: <About />,
                },
                {
                    path: '/:lang/blog',
                    element: <Blog />,
                },
                {
                    path: '/:lang/:postId',
                    element: <Post />,
                },
                {
                    path: '/:lang/careers',
                    element: <Careers />,
                },
                {
                    path: '/:lang/contact',
                    element: <Contact />,
                },
                {
                    path: '/:lang/faq',
                    element: <Faq />,
                },
                {
                    path: '/:lang/termsandconditions',
                    element: <Tos />,
                },
                {
                    path: '/:lang/privacypolicy',
                    element: <PrivacyPolicy />,
                },
                {
                    path: '/:lang/cookiepolicy',
                    element: <CookiePolicy />,
                },
                {
                    path: '/:lang/profile',
                    element: <Profile />,
                },
                {
                    path: '/:lang/checkout',
                    element: <Checkout />,
                },
                {
                    path: '/:lang/passwordrecovery',
                    element: <PasswordRecovery />,
                },
                {
                    path: '/:lang/notfound',
                    element: <NotFound />,
                },
            ]
        },
    ])
}

export default Router;