import { useEffect, useState } from "react";
import Product, { BugProduct } from "./product";
import { Box, CircularProgress } from "@mui/material";

const ProductList = ({ bugzillaURL }: { bugzillaURL: string }) => {
  const [productList, setProductList] = useState<BugProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch(bugzillaURL + "/rest/product?type=accessible")
      .then((response) => {
        if (!response.ok) throw new Error("Network response not ok");
        return response.json();
      })
      .then((bugProducts) => {
        setProductList(bugProducts.products);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress></CircularProgress>;
  }

  if (productList.length === 0) {
    return <div>No products found.</div>;
  }
  console.log(productList);
  const products = productList.map((p) => <Product key={p.name} product={p} />);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {" "}
      {/* Use gap for spacing */}
      {products}
    </Box>
  );
};

export default ProductList;
