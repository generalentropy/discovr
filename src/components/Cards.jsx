// import { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";
import Error from "./Error";

function Cards({ children, isLoading, error, serversList }) {
  // const searchedServer =
  //   serversList.length > 0
  //     ? serversList.filter((post) =>
  //         `${post.title} ${post.body}`
  //           .toLowerCase()
  //           .includes(searchQuery.toLowerCase())
  //       )
  //     : serversList;

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
