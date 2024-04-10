import React, { useEffect, useState } from "react";

const Maincomponent = () => {
  const [Api, setapi] = useState([]);

  const ApiCal = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setapi(json));
  };

  useEffect(() => {
    ApiCal();
  }, []);

  console.log(Api);

  return (
    <div>
    <form>
        
    </form>
    </div>
  );
};

export default Maincomponent;
