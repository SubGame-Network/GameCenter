import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import useAppContext from "../../hooks/useAppContext";

interface TabAGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  tabOptions: {
    label: string;
    iconClassName?: string;
    tabnumber: number;
  }[];
  useStateNumber: {
    defaultTabNumber: number;
    tagNumber: number;
    setTabNumber: (a: number) => void;
  };
  activeNeedBg?: boolean;
}

function TabGroup({
  tabOptions,
  useStateNumber,
  activeNeedBg = false,

  ...rest
}: TabAGroupProps) {
  const { isWhiteMode } = useAppContext();

  const tab = useStateNumber.tagNumber;

  const handleTabClick = (event: React.MouseEvent<HTMLElement>) => {
    if (useStateNumber) {
      const tab = event.currentTarget.getAttribute("data-tabnumber") || "-1";
      useStateNumber.setTabNumber(parseInt(tab));
      return;
    }
  };

  return (
    <TabAContainer className="tabGroup" {...rest} isWhiteMode={isWhiteMode}>
      {tabOptions.map((item, index) => {
        return (
          <Tab
            key={index}
            onClick={handleTabClick}
            data-tabnumber={item.tabnumber}
            className={item.tabnumber === tab ? "active" : ""}
            isWhiteMode={isWhiteMode}
            activeNeedBg={activeNeedBg}
          >
            <i className={item.iconClassName} />
            <span>
              <FormattedMessage id={item.label} />
            </span>
          </Tab>
        );
      })}
    </TabAContainer>
  );
}
const TabAContainer = styled.div<{ isWhiteMode: boolean }>`
  display: flex;
  &.style2 {
    div {
      &.active {
        border-bottom: 5px solid
          ${({ isWhiteMode, theme }) => (isWhiteMode ? "#fff" : theme.Dark_2)};
        box-shadow: 0px -5px 10px -2px rgba(0, 0, 0, 0.15);
        border-radius: 5px 5px 0px 0px;
      }
    }
  }
`;
const Tab = styled.div<{ isWhiteMode: boolean; activeNeedBg: boolean }>`
  min-width: 110px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  border-bottom: none;
  border-radius: 4px 4px 0px 0;
  font-size: 14px;
  cursor: pointer;

  i {
    margin: 0 4px 0 0;
  }
  span {
    color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Grey_1 : theme.Dark_4};
  }
  &:hover {
    span {
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Black : "#fff"};
      opacity: 1;
    }
  }

  &.active {
    border-bottom: 2px solid
      ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Black : "#fff"};
    background-color: ${({ theme, activeNeedBg, isWhiteMode }) =>
      activeNeedBg && !isWhiteMode ? theme.Dark_2 : "transparent"};
    span {
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Black : "#fff"};
      opacity: 1;
    }
  }
`;

export default TabGroup;
