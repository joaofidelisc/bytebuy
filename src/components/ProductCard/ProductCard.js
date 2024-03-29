import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/shoppingCartSlice";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({ title, imgsrc, description, price, category, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProduct = () => {
    const product = {
      title: title,
      imgsrc: imgsrc,
      description: description,
      standardPrice: price,
      category: category,
      id: id,
    };
    dispatch(addProduct(product));
    navigate("/carrinhodecompras");
  };

  return (
    <Card style={{ width: "15em", height: "25em" }}>
      <Card.Img
        variant="top"
        src={imgsrc}
        style={{
          objectFit: "contain",
          maxHeight: "30%",
          marginBottom: "5%",
          marginTop: "5%",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Title
          style={{
            height: "3rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Card.Title>
        <Card.Text
          style={{
            maxHeight: "6rem",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Card.Text>
        <Card.Text style={{ maxHeight: "6rem", overflow: "hidden" }}>
          R${price}
        </Card.Text>
        <Button
          variant="primary"
          style={{ maxWidth: "100%" }}
          onClick={handleProduct}
        >
          Adicionar ao carrinho
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
