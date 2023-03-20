import * as userEvent from "@testing-library/user-event";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";

test("renders Login screen", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  screen.debug();
});

test("Email input should be rendered", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emaillInputEl = screen.getByPlaceholderText("mail@user.com");
  expect(emaillInputEl).toBeInTheDocument();
});

test("Logo input should be rendered", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const Logo = screen.getByTestId("logo");
  expect(Logo).toBeInTheDocument();
});

test("Password input should be rendered", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const passwordInput = screen.getByPlaceholderText("Password");
  expect(passwordInput).toBeInTheDocument();
});

test("Button should be rendered", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const buttonLogin = screen.getByRole("button");
  expect(buttonLogin).toBeInTheDocument();
});

test("Email input should be empty", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emaillInputEl = screen.getByPlaceholderText("mail@user.com");
  expect(emaillInputEl.value).toBe("");
});

test("Password input should be empty", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const passwordInput = screen.getByPlaceholderText("Password");
  expect(passwordInput.value).toBe("");
});

test("email should change", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const emaillInputEl = screen.getByPlaceholderText("mail@user.com");
  const emailTest = "user@email.com";

  fireEvent.change(emaillInputEl, { target: { value: emailTest } });
  expect(emaillInputEl.value).toBe(emailTest);
});

test("Password input should change", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const passwordInput = screen.getByPlaceholderText("Password");
  const passwordTest = "123456";

  fireEvent.change(passwordInput, { target: { value: passwordTest } });
  expect(passwordInput.value).toBe(passwordTest);
});

test("renderin and submitting a form", async () => {
  const handleSubmit = jest.fn();
  render(
    <BrowserRouter>
      <Login onSubmit={handleSubmit} />
    </BrowserRouter>
  );

  userEvent.default.type(
        screen.getByTestId("email", { name: email }),
        "eduardo@gmail.com"
    );
  userEvent.default.type(
        screen.getByTestId("pass", { name: password }),
        "123456"
    );

  userEvent.default.click(screen.getByRole("button"), { name: /submit/ });

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: "eduardo@gmail.com",
      password: "123456",
    })
  );
});
