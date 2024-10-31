import { Card, CardActionArea, CardContent, CardHeader } from "@mui/material";
import type { ProductComponent } from "./product";
import { useNavigate } from "react-router-dom";
type ProductComponentProps = {
  productComponent: ProductComponent;
};

const ProductComponentCard = ({ productComponent }: ProductComponentProps) => {
  console.log(productComponent.default_assigned_to);
  const navigate = useNavigate();
  const handleClick = () => {
    if (productComponent.id) navigate(`/product/${productComponent.name}`);
  };
  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardHeader
          title={productComponent.name}
          subheader={productComponent.default_assigned_to}
        />
        <CardContent>{productComponent.description}</CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductComponentCard;
