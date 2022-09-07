import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header id="header" className="header">
        <Link to="/">
          <h1>DIARY APP</h1>
        </Link>
      </header>
    </>
  );
}
