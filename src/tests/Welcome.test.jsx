import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import Welcome from "../components/Welcome"

describe("component testing", () => {
  it("mounts correctly the component", () => {
    render(<Welcome />)
    const component = screen.getByText(/benvenuto/i)
    expect(component).toBeInTheDocument()
  })
})
