function Menu() {
  return (
    <div className="menu-wrapper">
      <span className="menu-btn btn-add-bot">
        <BotIcon /> ajouter le bot{" "}
      </span>

      <span className="menu-btn ">documentation</span>

      <span className="menu-btn ">faq</span>
    </div>
  );
}

export default Menu;

function BotIcon() {
  return (
    <svg
      className="robot-icon"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        stroke="#fefefe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2m16 0h2m-7-1v2m-6-2v2" />
      </g>
    </svg>
  );
}
