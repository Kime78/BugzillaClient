import { Box } from "@mui/material";
import ProductComponent from "./productComponent";
import ProductComponentCard from "./productComponent";
import { components } from "../generated/bugzilla";

export type BugProduct = components["schemas"]["Product"];

export type ProductComponent = NonNullable<
  components["schemas"]["Product"]["components"]
>[number];

type ProductProps = {
  product: BugProduct;
};

const Product = ({ product }: ProductProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <h2 style={{ color: "black" }}>{product.name}</h2>
      {product.components?.map((p) => (
        <ProductComponentCard productComponent={p} key={p.id} />
      ))}
    </Box>
  );
};

export default Product;
