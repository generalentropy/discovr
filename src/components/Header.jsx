import Logo from "./Logo";

function Header() {
  return (
    <div className="header">
      <Logo /> <span className="beta">(Beta)</span>
    </div>
  );
}

export default Header;
