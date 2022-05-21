import React from "react";
import {
  activeStyle,
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./styles";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Wrapper className="nocopy">
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map((value) => {
              return (
                !value.hidden && (
                  <NavLink style={activeStyle} key={value.id} to={value.path}>
                    {value.title}
                  </NavLink>
                )
              );
            })}
          </NavbarBody>
          <Logo>
            <button width={"120px"}>SignIn</button>
          </Logo>
        </NavbarWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  );
};
export default Navbar;
