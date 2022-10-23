import { render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm";

describe("Login Form Component", () => {
  test("inputs should be initially empty", () => {
    render(<LoginForm />);
    const emailInputElement = screen.getByRole("textbox");
    const passwordInputElement = screen.getByLabelText("Password");
    const confirmedPasswordInputElement = screen.getByLabelText("Confirm Password");
    expect(emailInputElement.value).toBe('');
    expect(passwordInputElement.value).toBe('');
    expect(confirmedPasswordInputElement.value).toBe('');

  });
});
