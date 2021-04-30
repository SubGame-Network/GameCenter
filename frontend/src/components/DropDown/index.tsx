import React, { useRef } from "react";
import styled from "styled-components";

interface DropdownProps {
  targetClass: string;
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({
  children,
  targetClass,
}) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const toggleButtonOpenAndSettingMenuPosition = () => {
    const userMenuElm = document.querySelector(`.${targetClass}`);
    if (userMenuElm?.classList.contains("open")) {
      buttonRef.current?.classList.add("open");
      if (userMenuElm?.getBoundingClientRect().right >= window.innerWidth) {
        userMenuElm?.classList.add("right");
      } else {
        userMenuElm?.classList.add("left");
      }
    } else {
      buttonRef.current?.classList.remove("open");
      userMenuElm?.classList.remove("right");
      userMenuElm?.classList.remove("left");
    }
  };

  const openUserMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const html = document.querySelector("html");
    const targetMenu = document.querySelector(`.${targetClass}`);
    const dropDownBtn = document.querySelector(`.dropDownBtn`);
    if (targetMenu && html && dropDownBtn) {
      targetMenu.classList.add("open");
      toggleButtonOpenAndSettingMenuPosition();
      html.addEventListener("click", closeUserMenu);
      dropDownBtn.addEventListener("click", closeUserMenu);
    }
  };

  const closeUserMenu = (event: any) => {
    event.stopPropagation();
    const html = document.querySelector("html");
    const targetMenu = document.querySelector(`.${targetClass}`);
    const dropDownBtn = document.querySelector(`.dropDownBtn`);

    if (targetMenu && html && dropDownBtn) {
      if (
        !buttonRef.current?.contains(event.target) ||
        event.target === dropDownBtn ||
        dropDownBtn.contains(event.target)
      ) {
        targetMenu.classList.remove("open");
        toggleButtonOpenAndSettingMenuPosition();
        html.removeEventListener("click", closeUserMenu);
        dropDownBtn.removeEventListener("click", closeUserMenu);
      }
    }
  };

  return (
    <DropdownStyle
      onClick={(e) => {
        openUserMenu(e);
      }}
      ref={buttonRef}
      data-btn="btn"
    >
      {children}
    </DropdownStyle>
  );
};

const DropdownStyle = styled.div`
  position: relative;
`;

export default Dropdown;
