import { useHashtag } from "../hooks/useHashtag";

function Hashtag({ customStyle, name }) {
  const { style, hashtagName } = useHashtag(name);

  return (
    <div className="hashtag" style={{ ...style, ...customStyle }}>
      #{hashtagName}
    </div>
  );
}

export default Hashtag;
