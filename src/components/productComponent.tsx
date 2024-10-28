import { Card, CardContent, CardHeader } from "@mui/material";
import type { ProductComponent } from "./product";

type ProductComponentProps = {
  productComponent: ProductComponent;
};

const ProductComponentCard = ({ productComponent }: ProductComponentProps) => {
  return (
    <Card>
      <CardHeader
        title={productComponent.name}
        subheader={productComponent.assignedTo}
      ></CardHeader>
      <CardContent>{productComponent.description}</CardContent>
    </Card>
  );
};

export default ProductComponentCard;
