import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import { App } from "../../App";
import { BrowserRouter } from "react-router-dom";

test("Full app rendering", async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  // Verify page content for default route
  expect(screen.getByText(/My Spotify Profile/i)).toBeInTheDocument();
  await user.click(screen.getByText(/Favorites/i));
});
