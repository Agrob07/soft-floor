import About from "../pages/About";
import Clients from "../pages/Clients";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import Landing from "../pages/Landing";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";

export const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/clients",
    element: <Clients />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/products",
    element: <Products />,
    children: [
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
    ],
  },
];
