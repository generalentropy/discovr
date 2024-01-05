import StarRating from "./StarRating";
import Hashtag from "./Hashtag";
import ServerInfoWrapper from "./Info";
import JoinButton from "./JoinButton";
import { OnlineIcon, MembersIcon } from "./Icones";
import { hashtagsCleaner, computeRating } from "../utils/arrayUtils";
import { descriptionCleaner, serverNameCleaner } from "../utils/stringUtils";

function Card({ nom, image, desc, bump, online, tags, membres, rating }) {
  const cardTags = hashtagsCleaner(tags);
  const averageRating = computeRating(rating);

  return (
    <div className="card-wrapper gradient-border">
      <StarRating value={averageRating} />
      {console.log("jsx")}
      <div className="picture">
        <img src={image}></img>
      </div>

      <ServerInfoWrapper>
        <InfoElement className="members" style={{ backgroundColor: "#29b6f6" }}>
          <MembersIcon className="info-icon" />
          {membres} membres
        </InfoElement>

        <InfoElement className="online" style={{ backgroundColor: "#2794c7" }}>
          <OnlineIcon className="info-icon pulse" />
          {online} online
        </InfoElement>
      </ServerInfoWrapper>

      <span className="server-name">{serverNameCleaner(nom)}</span>

      <div className="tags-wrapper">
        {cardTags.map((tag, i) => (
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
