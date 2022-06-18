import React from "react";
import {
  activeStyle,
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./styles";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic/Button";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const gotoSignIn = () => {
    navigate("/signin");
  };

  const logOut = () => {
    localStorage.removeItem("token");

    if (location?.pathname?.includes("profile")) {
      navigate("/home");
    } else {
      navigate(location.pathname);
    }
  };

  return (
    <Wrapper className='nocopy'>
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
            {localStorage.getItem("token") ? (
              <>
                <Button
                  mr={20}
                  onClick={() => navigate("/profile")}
                  width={"131px"}
                >
                  Profile
                </Button>
                <Button onClick={logOut} width={"131px"}>
                  Log Out
                </Button>
              </>
            ) : (
              <Button onClick={gotoSignIn} width={"120px"}>
                Sign In
              </Button>
            )}
          </Logo>
        </NavbarWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  );
};
export default Navbar;
