import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Menu from "../components/Menu";

export default function Root() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav>
        <h1><Link to="/home">Budget App</Link></h1>
        <button onClick={() => setShowMenu(!showMenu)}>Menu</button>
      </nav>

      {showMenu ? <Menu hideMenu={setShowMenu} /> : null}

      <div>
        <Outlet />
      </div>
    </>
  );
}