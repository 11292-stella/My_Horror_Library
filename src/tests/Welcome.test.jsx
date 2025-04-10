import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import Welcome from "../components/Welcome"
import AllTheBooks from "../components/AllTheBooks"

describe("component testing", () => {
  it("mounts correctly the component", () => {
    render(<Welcome />)
    const component = screen.getByText(/benvenuto/i)
    expect(component).toBeInTheDocument()
  })

  describe("card testing", () => {
    it("mounts correctly the card", async () => {
      render(<AllTheBooks />)
      const listCard = await screen.findAllByTestId("card")
      expect(listCard).toHaveLength(150)
    })
  })
})
