function JoinButton({ name, url = "#" }) {
  return (
    <a href={url}>
      <button className="join-button">{name}</button>
    </a>
  );
}

export default JoinButton;
