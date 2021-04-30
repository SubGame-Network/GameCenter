import React, { useEffect } from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

interface Props {
  opacity?: number;
  zIndex?: number;
  mobile?: boolean;
}

const Modal: React.FunctionComponent<Props> = (props) => {
  useEffect(() => {
    if (window.screen.width < 1024) {
      const html = document.querySelector("html");
      if (html) {
        html.style.overflow = "hidden";
      }
    }
    return () => {
      if (window.screen.width < 1024) {
        const html = document.querySelector("html");
        if (html) {
          html.style.overflow = "auto";
        }
      }
    };
  }, []);
  return (
    <>
      <ModalMask
        opacity={props.opacity}
        zIndex={props.zIndex}
        mobile={!!props.mobile}
      >
        <div className="modal">{props.children}</div>
      </ModalMask>
    </>
  );
};

const ModalMask = styled.div<{
  opacity?: number;
  zIndex?: number;
  mobile?: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ zIndex }) => {
    return !!zIndex ? zIndex : 6;
  }};

  background: ${({ opacity }) => {
    return `rgba(38, 43, 47, ${!!opacity ? opacity : 0.2})`;
  }};
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background-color: ${({ theme }) => (isMobile ? "#FFF" : theme.Pop_Up)};
  }
`;

export default Modal;
