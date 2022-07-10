import About from "../pages/About";
import Contact from "../pages/Contact";
import Landing from "../pages/Landing";
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
