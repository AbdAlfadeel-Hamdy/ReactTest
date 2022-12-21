import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
describe("Greeting component", () => {
  test("renders hello world as text", () => {
    // Arrange
    render(<Greeting />);
    // Act
    // Assert
    const helloWorldElement = screen.getByText("Hello world!", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });
});
