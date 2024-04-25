import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

function Product() {
  //   const [data, setData] = useState([]);
  //   const [products, getProduct] = useState();

  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addTocart = (product) => {
    dispatch(add(product));
  };

  const card = products.map((product) => (
    <div className="col-md-3 my-4">
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-secondary">
          <Button variant="primary" onClick={() => addTocart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <div className="container">
        <div className="row justify-content-between">{card}</div>
      </div>
    </>
  );
}

export default Product;
