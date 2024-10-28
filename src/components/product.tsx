import { Card, CardContent, CardHeader } from "@mui/material";
import ProductComponent from "./productComponent";
import ProductComponentCard from "./productComponent";

export type BugProduct = {
  name: string;
  components: ProductComponent[];
};

export type ProductComponent = {
  id: number;
  name: string;
  assignedTo: string;
  description: string;
  isActive: boolean;
};

type ProductProps = {
  product: BugProduct;
};

const Product = ({ product }: ProductProps) => {
  const productCards = product.components.map((p) => (
    <ProductComponentCard productComponent={p}></ProductComponentCard>
  ));
  return <div>{productCards}</div>;
};

export default Product;
