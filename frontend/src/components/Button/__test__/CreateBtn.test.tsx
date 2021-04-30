import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { render, screen, cleanup } from "../../../utils/test-utils";
import CreateBtn from "../CreateBtn";

describe("Test <CreateBtn/>", () => {
  test("check render", () => {
    render(<CreateBtn text="create" />);

    const elm = screen.getByText("create");

    expect(elm).toBeInTheDocument();
    cleanup();
  });

  test("check onClick", () => {
    const mockFunc = jest.fn();

    const { getByTestId } = render(
      <CreateBtn text="create" data-testid="createBtn" onClick={mockFunc} />
    );
    const btn = getByTestId("createBtn");

    userEvent.click(btn);
    expect(mockFunc).toBeCalledTimes(1);
    cleanup();
  });

  test("check disabled onClick", () => {
    const mockFunc = jest.fn();

    const { getByTestId } = render(
      <CreateBtn
        disabled={true}
        text="create"
        data-testid="createBtn"
        onClick={mockFunc}
      />
    );
    const btn = getByTestId("createBtn");

    userEvent.click(btn);
    expect(mockFunc).toBeCalledTimes(0);
    cleanup();
  });
});
