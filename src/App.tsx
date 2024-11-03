import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProductList from "./components/productList";
import BugList from "./components/bugList";
import BugView from "./components/bug";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList />,
    },
    {
      path: "/product/:product",
      element: <BugList />,
    },
    {
      path: "/bug/:bugId",
      element: <BugView />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
