import { useEffect, useState } from "react";
import Card from "./Card";

function Cards() {
  const [serversList, setServersList] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      const res = await fetch("http://localhost:8000/serveurs");

      const data = await res.json();

      setServersList(data);
    };

    fetchData();
  }, []);

  return (
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
  );
}

export default Cards;
