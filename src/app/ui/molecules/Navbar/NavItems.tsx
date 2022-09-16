import React, { useEffect, useRef, useState } from "react";
import useMenu from "../../../hooks/useMenu";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { push as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../../libs/responsive";
import "./index.css";

const ListContainer = styled.div`
  ${tw` 
  flex
  flex-row
  z-50
  `}
`;
const NavItem = styled.div`
  ${tw` 
    md:text-xl
    m-2
    md:m-4
    font-bold
    text-base
    self-center
    `}
  span {
    padding-bottom: 5px;
    cursor: pointer;
  }
  .active,
  span:hover {
    background-image: linear-gradient(to right, #dea23b 0%, #dea23b 100%);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 100% 4px;
  }
`;
const DropdownNavItem = styled(NavItem)`
  ${tw`  
  relative
  cursor-pointer
  `}
  span:focus {
    padding-bottom: 5px;
    cursor: pointer;
  }
`;
const SubNavContainer = styled.div`
  border-radius: 3px;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);

  ${tw` 
    w-max
    py-5
    px-5
    bg-white
    absolute
    top-10
  `}
`;
const SubNavItem = styled.div`
  ${tw`py-3`}
`;

const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const menu = useMenu();
  const navigate = useNavigate();
  const goToRoute = (route: string) => navigate(route);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // handle close box when clicked outside of the menu
  useEffect(() => {
    let handle = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handle);

    return () => document.removeEventListener("mousedown", handle);
  }, []);

  // handle burger-menu
  if (isMobile)
    return (
      <ListContainer>
        <Menu right>
          {menu.map((menu, i) =>
            menu.submenu ? (
              <div key={i} className="m-2 font-bold text-base self-center">
                <span>{menu.label}</span>
                <div className={"pl-4"}>
                  {menu.submenu.map((submenu) => (
                    <span
                      key={submenu.route}
                      className="block"
                      onClick={() => goToRoute(submenu.route)}
                    >
                      {submenu.label}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <NavItem>
                <span 
                key={menu.route} 
                onClick={() => goToRoute(menu.route)}>
                  {menu.label}
                </span>
              </NavItem>
            )
          )}
        </Menu>
      </ListContainer>
    );

  return (
    <ListContainer>
      {menu.map((menu, i) =>
        menu.submenu ? (
          <DropdownNavItem ref={menuRef}>
            <span
              key={i}
              onClick={() => {
                setOpen(!open);
              }}
            >
              {menu.label}
              {open ? (
                <FontAwesomeIcon className={"pl-2"} icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon className={"pl-2"} icon={faChevronUp} />
              )}
            </span>

            {open ? (
              <SubNavContainer>
                {menu.submenu.map((submenu) => (
                  <SubNavItem>
                    <span
                      key={submenu.route}
                      className={`block ${submenu.active ? "active" : ""}`}
                      onClick={() => goToRoute(submenu.route)}
                    >
                      {submenu.label}
                    </span>
                  </SubNavItem>
                ))}
              </SubNavContainer>
            ) : (
              ""
            )}
          </DropdownNavItem>
        ) : (
          <NavItem>
            <span
              key={i}
              className={`${menu.active ? "active" : ""}`}
              onClick={() => goToRoute(menu.route)}
            >
              {menu.label}
            </span>
          </NavItem>
        )
      )}
    </ListContainer>
  );
};

export default NavItems;
