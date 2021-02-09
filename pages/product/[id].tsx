import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ErrorMessage from "components/ErrorMessage";
import ProductSummary from "components/ProductSummary/ProductSummary";

const ProductPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [avocado, setAvocado] = useState<TProduct>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    setLoading(true);
    window
      .fetch(`/api/avo/${id}`)
      .then((res) => res.json())
      .then((avo) => {
        setAvocado(avo);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <section>
      {!loading ? (
        avocado == null ? (
          <ErrorMessage message={errorMessage}></ErrorMessage>
        ) : (
          <ProductSummary product={avocado} />
        )
      ) : (
        <div>Cargando...</div>
      )}
    </section>
  );
};

export default ProductPage;
