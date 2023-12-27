import StarRating from "./StarRating";
import Hashtag from "./Hashtag";
import ServerInfo from "./Info";
import JoinButton from "./JoinButton";

const bumpNum = 25;

// ! maximum tag number check
// ! maximum hashtag length

// const cards = {
//   1: {
//     name: "Grafikart",
//     tags: [
//       "dev",
//       "design",
//       "frontend",
//       "javascript",
//       "backend",
//       "france",
//       "programmation",
//       "dev",
//     ],

//     serverlink: "",
//     description: "",
//     members: "",
//     online: "",
//   },
// };

const tags = [
  "dev",
  "design",
  "frontend",
  "javascript",
  "backend",
  "france",
  "programmation",
];

function Card() {
  return (
    <div className="card-wrapper gradient-border">
      <StarRating />

      <div className="picture">
        <img src="/src/assets/profil.jpg"></img>
      </div>

      <ServerInfo />

      <span className="server-name">Grafikart - serveur officiel</span>

      <div className="tags-wrapper">
        {tags.map((tag, i) => (
          <Hashtag name={tag} key={i} />
        ))}
      </div>

      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </div>

      <JoinButton name="Rejoindre ce serveur" />

      <div className="bump">
        Bumpé <strong>{bumpNum}</strong> fois 🚀
      </div>
    </div>
  );
}

export default Card;
