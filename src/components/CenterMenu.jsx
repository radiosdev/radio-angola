import React from "react";
import { Link } from "react-router-dom";

function CenterMenu() {
  const liStyle = "mr-[3rem] hover:cursor-pointer ";
  return (
    <div className="menu flex">
      <ul className="flex w-[100%] justify-between">
        <li className={liStyle}>
          <Link className="no-underline text-white " to="/">
            Inicio
          </Link>
        </li>
        <li className={liStyle}>
          <Link className="no-underline text-white " to="/aboutusage">
            Sobre Nós
          </Link>
        </li>
        <li className={liStyle}>
          <Link className="no-underline text-white " to="/termsofusepage">
            Termos de Serviço{" "}
          </Link>
        </li>

        <li className={liStyle}>
          <Link className="no-underline text-white " to="/privacypolicy">
            Política de Privacidade
          </Link>
        </li>
        <li className={liStyle}>
          <Link className="no-underline text-white " to="/copyrightpolicy">
            Política de Direitos Autorais
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default CenterMenu;
