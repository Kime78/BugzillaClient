import { useEffect, useState } from "react";
import Product, { BugProduct } from "./product";
import { CircularProgress } from "@mui/material";
import { api } from "../lib/api";

const ProductList = () => {
  const [productList, setProductList] = useState<BugProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    api
      .GET("/product", {
        params: {
          query: {
            type: ["accessible"],
          },
        },
      })
      .then((response) => {
        if (!response.data?.products) {
          return;
        }
        setProductList(response.data?.products);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (productList.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div>
      {productList.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
