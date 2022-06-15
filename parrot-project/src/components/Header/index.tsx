import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../../assets/logo1.png";
import * as S from "./styled";

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <div>
        <img src={logo} alt="Parrot Social Network"/>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>

          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
    </S.HeaderContainer>
  );
}

export default Header;