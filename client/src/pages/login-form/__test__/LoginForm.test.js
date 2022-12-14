/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";

describe("Login Form Component", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  const typeInfoForm = ({ email, password, confirmPassword }) => {
    const emailInputElement = screen.getByRole("textbox", { name: /email/i });
    const passwordInputElement = screen.getByLabelText("Password");
    const confirmedPasswordInputElement =
      screen.getByLabelText("Confirm Password");
    if (email) {
      userEvent.type(emailInputElement, email);
    }
    if (password) {
      userEvent.type(passwordInputElement, password);
    }
    if (confirmPassword) {
      userEvent.type(confirmedPasswordInputElement, confirmPassword);
    }

    return {
      emailInputElement,
      passwordInputElement,
      confirmedPasswordInputElement,
    };
  };
  test("inputs should be initially empty", () => {
    const emailInputElement = screen.getByRole("textbox");
    const passwordInputElement = screen.getByLabelText("Password");
    const confirmedPasswordInputElement =
      screen.getByLabelText("Confirm Password");
    expect(emailInputElement.value).toBe("");
    expect(passwordInputElement.value).toBe("");
    expect(confirmedPasswordInputElement.value).toBe("");
  });

  test("should be able to type an email", () => {
    const { emailInputElement } = typeInfoForm({ email: "amir@gmail.com" });
    expect(emailInputElement.value).toBe("amir@gmail.com");
  });

  test("should be able to type password", () => {
    const { passwordInputElement } = typeInfoForm({ password: "1qaz@WSX" });
    expect(passwordInputElement.value).toBe("1qaz@WSX");
  });

  test("should be able to type confirm password", () => {
    const { confirmedPasswordInputElement } = typeInfoForm({
      confirmPassword: "1qaz@WSX",
    });
    expect(confirmedPasswordInputElement.value).toBe("1qaz@WSX");
  });

  test("should show email error message for invalid email", () => {
    const emailErrorText = screen.queryByText(
      /the email you input is invalid/i
    );
    const submitButtonElement = screen.getByRole("button", { name: /submit/i });
    expect(emailErrorText).not.toBeInTheDocument();
    typeInfoForm({ email: "amir.gmail.com" });
    userEvent.click(submitButtonElement); 
    const emailErrorTextAgain = screen.queryByText(
      /the email you input is invalid/i
    );
    expect(emailErrorTextAgain).toBeInTheDocument();
  });

  test("should show password error if password is less than 5 characters", () => {
    const emailInputElement = screen.getByRole("textbox", { name: /email/i });
    userEvent.type(emailInputElement, "amir@gmail.com");
    const passwordErrorText = screen.queryByText(
      /the password you entre should contain 5 or more characters/i
    );
    const passwordInputElement = screen.getByLabelText("Password");
    expect(passwordErrorText).not.toBeInTheDocument();
    userEvent.type(passwordInputElement, "123");
    const submitButtonElement = screen.getByRole("button", { name: /submit/i });
    userEvent.click(submitButtonElement);
    const passwordErrorTextAgain = screen.queryByText(
      /the password you entre should contain 5 or more characters/i
    );
    expect(passwordErrorTextAgain).toBeInTheDocument();
  });

  test("should show confirmed password error if password do not match", () => {
    const emailInputElement = screen.getByRole("textbox", { name: /email/i });
    const confirmedPasswordInputElement =
      screen.getByLabelText("Confirm Password");
    userEvent.type(emailInputElement, "amir@gmail.com");
    const conformPasswordErrorText = screen.queryByText(
      /the passwords do not match. try again/i
    );
    const passwordInputElement = screen.getByLabelText("Password");
    expect(conformPasswordErrorText).not.toBeInTheDocument();
    userEvent.type(passwordInputElement, "12345");
    userEvent.type(confirmedPasswordInputElement, "123456");
    const submitButtonElement = screen.getByRole("button", { name: /submit/i });
    userEvent.click(submitButtonElement);
    const conformPasswordErrorTextAgain = screen.queryByText(
      /the passwords do not match. try again/i
    );
    expect(conformPasswordErrorTextAgain).toBeInTheDocument();
  });
});
