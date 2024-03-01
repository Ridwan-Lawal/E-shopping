import { useEffect, useState } from "react";

export function useInternationalization(priceToConvert) {
  const [productPrice, setProductPrice] = useState("");

  useEffect(
    function () {
      const priceConvert = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(priceToConvert);

      setProductPrice(priceConvert);
    },
    [priceToConvert]
  );

  return productPrice;
}
