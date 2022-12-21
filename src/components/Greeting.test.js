import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
describe("Greeting component", () => {
  test("renders 'hello world' as text", () => {
    // Arrange
    render(<Greeting />);
    // Act
    // Assert
    const helloWorldElement = screen.getByText("Hello world!", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders 'our first test' if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);
    // Act
    // Assert
    const outputElement = screen.getByText("Our first test.");
    expect(outputElement).toBeInTheDocument();
  });
  test("renders 'Changed text' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const outputElement = screen.getByText("Changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test(`remove "our first test" if the button was clicked`, () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const outputElement = screen.queryByText("Our first test.", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
