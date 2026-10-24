import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders the file-tree navigation", () => {
  render(<App />)
  expect(screen.getByLabelText(/site navigation/i)).toBeInTheDocument()
})

test("renders the name in the hero after the intro types out", async () => {
  render(<App />)
  // The hero types a command before revealing the name, so wait for it.
  expect(await screen.findByText(/Vinod Chandak/i)).toBeInTheDocument()
})
