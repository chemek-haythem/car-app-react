import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import './App.css';
import Home from './modules/Home/Home';
import Login from './modules/Login/Login';
import About from './modules/About/About';
import Basket from './modules/Basket/Basket';
import Faq from './modules/Help/Faq';
import Contact from './modules/Help/Contact';
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import NotFound from './modules/NotFound/NotFound';
import CarList from './modules/CarList/CarList';
import CarDetails from './modules/CarList/CarDetails';
import CarListLayout from './layouts/CarListLayout';
import { CarDetailsLoader, CarListDataLoader } from './modules/CarList/CarLoader';
import { ShoppingCardContextProvider } from './context/ShoppingCardContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="CarList" element={<CarListLayout />}>
        <Route
          index 
          element={<CarList />}
          loader={CarListDataLoader}
        />
         <Route 
          path=":id" 
          element={<CarDetails />}
          loader={CarDetailsLoader}
        />
      </Route>

      <Route path="Login" element={<Login />} />
      <Route path="Basket" element={<Basket />} />
      <Route path="About" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact/>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <ShoppingCardContextProvider>
      <RouterProvider router={router} />
    </ShoppingCardContextProvider>
  );
};

export default App;
