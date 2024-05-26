import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ toggle, show }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    toggle();
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className={`sideContainer ${show ? "show" : ""}`}>
      <div className="close" onClick={toggle}>
        Close
      </div>
      <div className="sideMenu">
        <span className="sideLink" onClick={() => scrollTo("menu")}>
          Menu
        </span>
        <span className="sideLink" onClick={() => scrollTo("staff")}>
          Staff
        </span>
        <span className="sideLink">Custom cakes</span>
        <span className="sideLink">Contact</span>

        <div className="btnWrap">
          <div className="sideRoute">Book now</div>
        </div>
      </div>
    </div>
    // <SidebarContainer isOpen={isOpen} onClick={toggle}>
    // 	<Icon onClick={toggle}>
    // 		<CloseIcon />
    // 	</Icon>

    // 	<SidebarMenu>
    // 		<SidebarLink to="/">Pizzas</SidebarLink>
    // 		<SidebarLink to="/">Desserts</SidebarLink>
    // 		<SidebarLink to="/">Full Menu</SidebarLink>
    // 	</SidebarMenu>

    // 	<SideBtnWrap>
    // 		<SidebarRoute to="/">Order Now</SidebarRoute>
    // 	</SideBtnWrap>
    // </SidebarContainer>
  );
};

export default Sidebar;
