import React from "react";
import { Card } from "semantic-ui-react";
import Link from "next/link";
import Image from "next/image";

type ProductListProps = {
  products: TProduct[];
};

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href={`/product/${id}`} passHref>
      <Card as="a">
        <Image src={image} width={333} height={333} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta style={{ color: "dimgray" }}>{price}</Card.Meta>
        </Card.Content>
      </Card>
    </Link>
  ));

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
);

export default ProductList;
