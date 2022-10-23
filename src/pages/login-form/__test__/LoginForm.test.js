import { render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm";

describe("Login Form Component", () => {
  test("inputs should be initially empty", () => {
    render(<LoginForm />);
    const emailInputElement = screen.getByRole("textbox");
    expect(emailInputElement.value).toBe('');

  });
});
