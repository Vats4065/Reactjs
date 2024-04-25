import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const cartProduct = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
   
  };

  const card = cartProduct.map((product) => (
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
          <Button
            variant="primary"
            className="bg-danger"
            onClick={() => removeFromCart(product.id)}
          >
            Remove
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

export default Cart;
