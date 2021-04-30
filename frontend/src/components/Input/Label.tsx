import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
interface Props extends React.HTMLAttributes<HTMLLabelElement> {
  label: string;
  isWhiteMode?: boolean;
}

const Label = ({ label, isWhiteMode, ...rest }: Props) => {
  return (
    <Body>
      <LabelStyle htmlFor={label} {...rest} isWhiteMode={isWhiteMode}>
        <FormattedMessage id={label} />
      </LabelStyle>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 5px 0;
`;

const LabelStyle = styled.label<{ isWhiteMode?: boolean }>`
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.4px;
  color: ${({ isWhiteMode, theme }) =>
    isWhiteMode ? theme.Secondary_Black : "#fff"};
  display: block;
`;

export default Label;
