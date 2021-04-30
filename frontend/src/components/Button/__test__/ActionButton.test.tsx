import React from "react";
import { IconFilledAccount } from "react-icon-guanfan";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { render, cleanup } from "../../../utils/test-utils";
import ActionButton from "../ActionButton";

describe("Test <ActionButton/>", () => {
  test("check render", () => {
    const elm = render(<ActionButton icon={<IconFilledAccount />} />);
    const icon = elm.container.querySelector("svg");

    expect(icon).toBeInTheDocument();
    cleanup();
  });

  test("check onClick", () => {
    const mockFunc = jest.fn();

    const { getByTestId } = render(
      <ActionButton
        data-testid="actionButton"
        icon={<IconFilledAccount />}
        onClick={mockFunc}
      />
    );
    const btn = getByTestId("actionButton");

    userEvent.click(btn);
    expect(mockFunc).toBeCalledTimes(1);
    cleanup();
  });

  test("check disabled onClick", () => {
    const mockFunc = jest.fn();

    const { getByTestId } = render(
      <ActionButton
        disabled={true}
        data-testid="actionButton"
        icon={<IconFilledAccount />}
        onClick={mockFunc}
      />
    );
    const btn = getByTestId("actionButton");

    userEvent.click(btn);
    expect(mockFunc).toBeCalledTimes(0);
    cleanup();
  });
});
