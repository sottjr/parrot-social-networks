import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../../assets/logo1.png";
import * as S from "./styled";

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderNavbar>
        <S.HeaderLogo>
          <S.Logo src={logo} alt="Parrot Social Network"/>
        </S.HeaderLogo>
        <div>
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
          </div>
      </S.HeaderNavbar>
    </S.HeaderContainer>
  );
}

export default Header;