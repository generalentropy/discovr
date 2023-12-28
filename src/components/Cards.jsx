import { useEffect } from "react";

function Cards({ children }) {
  useEffect(() => {
    const fetchData = async function () {
      const res = await fetch("http://localhost:8000/serveurs");

      const data = await res.json();

      console.log(data);
    };

    fetchData();
  });

  return <div className="cards-container">{children}</div>;
}

export default Cards;
