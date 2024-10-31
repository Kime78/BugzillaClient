import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProductList from "./components/productList";
import BugList from "./components/bugList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProductList bugzillaURL="https://bugzilla.kernel.org"></ProductList>
      ),
    },
    {
      path: "/product/:product",
      element: <BugList></BugList>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
