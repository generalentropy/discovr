import { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";

function Cards({ children }) {
  const [serversList, setServersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async function () {
      setIsLoading(true);

      const res = await fetch("http://localhost:8000/serveurs");
      const data = await res.json();

      setServersList(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      {children}
      <div className="cards-container">
        {serversList.map((serveur) => (
          <Card
            key={serveur.id}
            nom={serveur.nom}
            image={serveur.image}
            desc={serveur.description}
            bump={serveur.bump}
            online={serveur.online}
            tags={serveur.tags}
            membres={serveur.membres}
            rating={serveur.note}
          />
        ))}
      </div>
    </>
  );
}

export default Cards;
