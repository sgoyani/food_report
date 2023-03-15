import React from "react";
import { render, screen } from "@testing-library/react";

import LoaderComponent from "..";

describe("loader", () => {
  it("should render loader component", () => {
    const loadingMessage = "Loading...";
    render(<LoaderComponent isLoading loadingMessage={loadingMessage} />);

    // check if Loader components renders
    expect(screen.getByText(loadingMessage)).toBeInTheDocument();
  });

  it("should not render loader component", () => {
    const loadingMessage = "Loading...";
    const { container } = render(
      <LoaderComponent isLoading={false} loadingMessage={loadingMessage} />
    );

    // check if Loader components renders empty
    expect(container.innerHTML).toBe("");
  });
});
