import StarRating from "./StarRating";
import Hashtag from "./Hashtag";
import ServerInfoWrapper from "./Info";
import JoinButton from "./JoinButton";
import { OnlineIcon, MembersIcon } from "./Icones";

function Card({ nom, image, desc, bump, online, tags, membres, rating }) {
  console.log("component re-render");

  function serverNameCleaner(server) {
    const servername = server.trim();
    const MAX_LENGTH = 22;

    if (server.length > MAX_LENGTH) {
      let cleaned = server.substring(0, MAX_LENGTH);
      // Delete trailing space if necessary
      const output = cleaned.replace(/\s+$/, "");
      return output + "...";
    }

    return servername;
  }

  function descriptionCleaner(description) {
    const serverDescription = description.trim();
    const MAX_LENGTH = 150;

    if (serverDescription.length > MAX_LENGTH) {
      let cleaned = description.substring(0, MAX_LENGTH);
      // Delete trailing space if necessary
      const output = cleaned.replace(/\s+$/, "");
      return output + "...";
    }

    return serverDescription;
  }

  function hashtagsCleaner(tags) {
    if (tags.length === 0) return ["discovr", "server", "discord"];

    let MAX_TAGS = 6;

    const tagsTotalLength = tags.reduce(
      (acc, currentString) => acc + currentString.length,
      0
    );

    if (tagsTotalLength > 70) {
      MAX_TAGS = MAX_TAGS - 1;
    }

    if (tags.length > MAX_TAGS) {
      return tags.slice(0, MAX_TAGS);
    }

    return tags;
  }

  const cardTags = hashtagsCleaner(tags);
  const averageRating = computeRating(rating);

  // function randomizeImgQuery() {
  //   return `?random=${Math.ceil(Math.random() * 51)}`;
  // }

  function computeRating(ratings) {
    if (ratings.length === 0) return 0;

    const totalRating = ratings.reduce(
      (acc, currRating) => acc + currRating,
      0
    );

    const result = totalRating / ratings.length;

    return Math.round(result);
  }

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
