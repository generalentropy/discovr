import StarRating from "./StarRating";
import Hashtag from "./Hashtag";
import ServerInfoWrapper from "./Info";
import JoinButton from "./JoinButton";
import { OnlineIcon, MembersIcon } from "./Icones";

const tags = [
  "dev",
  "design",
  "frontend",
  "javascript",
  "backend",
  "france",
  "programmation",
];

function Card({ nom, image, desc, bump, online }) {
  function descriptionCleaner(description) {
    const serverDescription = description.trim();
    const MAX_LENGTH = 150;

    if (serverDescription.length > MAX_LENGTH) {
      let cleaned = description.substring(0, MAX_LENGTH);
      // Suppression de l'espace en fin de chaîne si nécessaire
      cleaned = cleaned.replace(/\s+$/, "");
      return cleaned + "...";
    }

    return serverDescription;
  }

  function randomizeImgQuery() {
    return `?random=${Math.floor(Math.random() * 51)}`;
  }

  return (
    <div className="card-wrapper gradient-border">
      <StarRating />

      <div className="picture">
        <img src={image + randomizeImgQuery()}></img>
      </div>

      <ServerInfoWrapper>
        <InfoElement className="members" style={{ backgroundColor: "#29b6f6" }}>
          <MembersIcon className="info-icon" />
          3456 membres
        </InfoElement>

        <InfoElement className="online" style={{ backgroundColor: "#2794c7" }}>
          <OnlineIcon className="info-icon pulse" />
          {online} online
        </InfoElement>
      </ServerInfoWrapper>

      <span className="server-name">{nom}</span>

      <div className="tags-wrapper">
        {tags.map((tag, i) => (
          <Hashtag name={tag} key={i} />
        ))}
      </div>

      <div className="description">{descriptionCleaner(desc)}</div>

      <JoinButton name="Rejoindre ce serveur" />

      <div className="bump">
        Bumpé <strong>{bump}</strong> fois 🚀
      </div>
    </div>
  );
}

function InfoElement({ className, children, style }) {
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
}

export default Card;
