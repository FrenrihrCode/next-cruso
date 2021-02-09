import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductList from "components/ProductList";
import KawaiiHeader from "components/Header/KawaiiHeader";
import SEO from "components/Seo";

export default function Home() {
  const [productList, setProductList] = useState<TProduct[]>([]);
  const {
    query: { name },
  } = useRouter();

  useEffect(() => {
    window
      .fetch(`/api/search/${name}`)
      .then((response) => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data);
      });
  }, [name]);

  return (
    <>
      <SEO
        title="Platzi Avo"
        description="Este es un proyecto elaborado siguiendo el curso de NextJS de Platzi, con la guía del profesor Jonathan Alvarez"
        siteTitle="Inicio"
      ></SEO>
      <KawaiiHeader></KawaiiHeader>
      {productList.length === 0 ? (
        <div>
          <p>No se encontraron resultados para esta búsqueda</p>
        </div>
      ) : (
        <ProductList products={productList} />
      )}
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </>
  );
}
