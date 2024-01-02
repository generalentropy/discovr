import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="menu-wrapper">
      <span className="menu-btn btn-add-bot">
        ajouter le bot <BotIcon />
      </span>

      <NavLink to="/documentation">
        <span className="menu-btn ">
          documentation <DocIcon />
        </span>
      </NavLink>

      <NavLink to="/feedback">
        <span className="menu-btn ">
          feedback <FeedIcon />
        </span>
      </NavLink>
    </div>
  );
}

export default Menu;

function BotIcon() {
  return (
    <svg
      className="icon-btn-menu"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#fefefe"
        d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Z"
      />
      <path
        fill="#fefefe"
        d="M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2"
      />
    </svg>
  );
}

function FeedIcon() {
  return (
    <svg
      className="icon-btn-menu"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="11" r="1" fill="#fefefe" />
      <circle cx="16" cy="11" r="1" fill="#fefefe" />
      <circle cx="8" cy="11" r="1" fill="#fefefe" />
      <path
        fill="#fefefe"
        d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m1 13a1 1 0 0 1-1 1H8.55a3 3 0 0 0-1.55.43l-3 1.8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"
      />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg
      className="icon-btn-menu"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#fefefe"
        d="M15 16H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m-6-2h3a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2"
      />
      <path
        fill="#fefefe"
        d="m19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67M14 5l2.74 3h-2a.79.79 0 0 1-.74-.85Zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5"
      />
    </svg>
  );
}
