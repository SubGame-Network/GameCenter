import React from "react";
import { useIntl, FormattedMessage } from "react-intl";
import Select, { components, Props } from "react-select";
import styled, { useTheme } from "styled-components";
import { IconSharpArrowdown } from "react-icon-guanfan";
import useAppContext from "../../hooks/useAppContext";

import Label from "../Input/Label";

export type TOption = {
  label: string;
  value: string | number;
};

interface MultiTagSelectProps extends Props {
  isError?: boolean;
  onChange?: any;
  options: any[];
  label?: string;
  labelPlaceholder?: boolean;
  value?: any;
}

const CustomSelect: React.FunctionComponent<MultiTagSelectProps> = ({
  label,
  options,
  defaultValue,
  menuIsOpen,
  isError,
  onFocus,
  onBlur,
  onChange,
  placeholder,
  labelPlaceholder,
  value,
}) => {
  const { isWhiteMode } = useAppContext();

  const IconDropdown: React.FunctionComponent = () => (
    <IconSharpArrowdown
      color={isWhiteMode ? theme.Secondary_Black : "#fff"}
      size={20}
    />
  );
  const { formatMessage } = useIntl();
  const theme = useTheme();
  const styles: any = {
    control: (provided: any, state: any) => {
      return {
        ...provided,
        height: "40px",
        minHeight: "40px",
        padding: 0,
        borderRadius: "4px",
        background: isWhiteMode ? "#FFF" : theme.Dark_3,
        borderColor: isError
          ? theme.Function_Error
          : isWhiteMode
          ? `${theme.Secondary_Grey_3}!important;`
          : `${theme.Dark_3} !important;`,
        boxShadow: "none",
        boxSizing: "border-box",
        "*": {
          boxSizing: "border-box",
        },
      };
    },
    menuList: (provided: any) => {
      return {
        ...provided,
        padding: 0,
        background: theme.Pop_Up,
        zIndex: 2,
        borderRadius: "4px",
      };
    },

    menu: () => {
      return {
        top: "calc(100% + 5px)",
        position: "absolute",
        left: 0,
        zIndex: "999",
        minWidth: "100%",
        boxShadow: "0px 0px 10px -2px rgba(0, 0, 0, 0.25);",
        padding: 0,
        borderRadius: "4px",
      };
    },

    option: (provided: any, state: any) => {
      return {
        ...provided,
        height: "40px",
        padding: " 0 15px",
        color: isWhiteMode ? theme.Secondary_Black : "#fff",
        backgroundColor: state.isSelected
          ? isWhiteMode
            ? theme.Secondary_Grey_3
            : theme.Dark_2
          : state.isFocused
          ? isWhiteMode
            ? theme.Secondary_Grey_3
            : theme.Dark_2
          : isWhiteMode
          ? "#FFF"
          : theme.Dark_3,
        // "&:active": {
        //   backgroundColor: theme.primaryColor1,
        // },
        whiteSpace: "nowrap",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontWeight: 400,
        fontSize: "15px",
      };
    },

    singleValue: (provided: any) => {
      return {
        ...provided,
        color: isWhiteMode ? theme.Secondary_Black : "#fff",
        fontWeight: 400,
        fontSize: "15px",
      };
    },
    dropdownIndicator: (provided: any) => {
      return {
        ...provided,
        padding: "0 8px 0 0",
        cursor: "pointer",
        "i,i::before": {
          fontSize: "20px",
          color: isWhiteMode ? theme.Secondary_Black : "#FFF",
        },
      };
    },
    menuPortal: (provided: any) => ({ ...provided, zIndex: 998 }),
  };

  const customComponents = {
    MultiValueRemove: () => null,
    DropdownIndicator: (props: any) => {
      return (
        <components.DropdownIndicator {...props}>
          <button type="button">
            <IconDropdown />
          </button>
        </components.DropdownIndicator>
      );
    },
    SingleValue: (props: any) => {
      return (
        <components.SingleValue {...props}>
          <FormattedMessage id={props?.data?.label || "-"} />
        </components.SingleValue>
      );
    },
    Option: (props: any) => {
      return (
        <SelectOptionMenuStyles>
          <components.Option {...props}>
            <label>
              <FormattedMessage id={props.label || "unknown"} />
            </label>
          </components.Option>
        </SelectOptionMenuStyles>
      );
    },
    CrossIcon: () => null,
    ClearIndicator: () => null,
    IndicatorSeparator: () => null,
  };

  const noOptionsMessage = (obj: any) => {
    return formatMessage({ id: "NoDataFound" });
  };

  return (
    <Body>
      {label && <Label label={label} />}
      {!label && labelPlaceholder && (
        <Label label="label" style={{ opacity: "0" }} />
      )}
      <Select
        value={value}
        menuIsOpen={menuIsOpen}
        defaultValue={defaultValue}
        isSearchable={false}
        hideSelectedOptions={false}
        closeMenuOnSelect={true}
        menuPortalTarget={document.body}
        menuPosition={"absolute"}
        menuPlacement="auto"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        noOptionsMessage={noOptionsMessage}
        options={options}
        styles={styles}
        placeholder={formatMessage({
          id: placeholder?.toString() ?? "Select",
        })}
        components={customComponents}
      />
    </Body>
  );
};
const SelectOptionMenuStyles = styled.div`
  label {
    margin: 0px 0 0 7px;
  }
`;

const Body = styled.div`
  width: 100%;
`;

export default CustomSelect;
