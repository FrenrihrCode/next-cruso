import React, { useState, useEffect } from "react";
import ProductList from "components/ProductList";
import KawaiiHeader from "components/Header/KawaiiHeader";
import SEO from "components/Seo";

export default function Home() {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data);
      });
  }, []);

  return (
    <>
      <SEO
        title="Platzi Avo"
        description="Este es un proyecto elaborado siguiendo el curso de NextJS de Platzi, con la guía del profesor Jonathan Alvarez"
        siteTitle="Inicio"
      ></SEO>
      <KawaiiHeader></KawaiiHeader>
      <ProductList products={productList} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </>
  );
}
