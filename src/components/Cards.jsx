import { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";
import Error from "./Error";

function Cards({ children }) {
  const [serversList, setServersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async function () {
      try {
        setIsLoading(true);

        const res = await fetch("http://localhost:8000/serveurs");

        if (!res.ok) {
          throw new Error(
            `Erreur lors de la récupération des données ${res.status}`
          );
        }
        const data = await res.json();

        setServersList(data);
        setIsLoading(false);
      } catch (error) {
        if (
          (error.name === "TypeError" &&
            error.message.includes("NetworkError")) ||
          error.message.includes("Failed to fetch")
        ) {
          setError(
            "Erreur réseau : impossible de se connecter au serveur de données."
          );
          setIsLoading(false);
        } else {
          console.log(error.message);
          setError(
            `Une erreur est survenue lors de la récupération des données: ${error.message}`
          );
          setIsLoading(false);
        }
      } finally {
        console.log("end");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading && !error) return <Loader />;
  if (error) return <Error error={error} />;

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
