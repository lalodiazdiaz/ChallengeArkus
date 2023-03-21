import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Login from "../Components/Login/Login";

import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  // Describe the requests to mock.
  rest.get("localhost:5000/api/v1/login", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          isValid: true,
          message: "User logged",
          data: {
            idUser: "6414a76b27bb04c28e6f0f2f",
            name: "Eduardo Super",
            range: "super",
            token:
              "eyJhbGciOiJIUzI1NiJ9.NjQxNGE3NmIyN2JiMDRjMjhlNmYwZjJm.FEAOgB42Pvbpwd0wuFdfdnPS0TGEUH7Cw91yzWZRZrs",
          },
        },
      ])
    );
  })
);

beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen();
});
afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});

 test("Sent data", async () => {
   render(
    <BrowserRouter>
       <Login />
     </BrowserRouter>
  );

  const emailInput = screen.getByTestId("email");
   const passwordInput = screen.getByTestId("pass");

  await act(() => {
    userEvent.type(emailInput, "edaurdo@gmail.com");
    userEvent.type(passwordInput, "123454");
  });

   const button = screen.getByRole("button", { name: /Login/i });

   await act(() => {
    userEvent.click(button);
  });

 });

test("renders Login screen", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  screen.debug();
});

test("Elements should be rendered", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emaillInputEl = screen.getByPlaceholderText("mail@user.com");
  const Logo = screen.getByTestId("logo");
  const passwordInput = screen.getByPlaceholderText("Password");
  const buttonLogin = screen.getByRole("button");
  expect(emaillInputEl).toBeInTheDocument();
  expect(Logo).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(buttonLogin).toBeInTheDocument();
});

test("inputs should be empty", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emaillInputEl = screen.getByPlaceholderText("mail@user.com");
  expect(emaillInputEl.value).toBe("");
  const passwordInput = screen.getByPlaceholderText("Password");
  expect(passwordInput.value).toBe("");
});



test("email should change", async () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const emaillInputEl = screen.getByPlaceholderText("mail@user.com");
  const emailTest = "user@email.com";
  await act(async () => {
    fireEvent.change(emaillInputEl, { target: { value: emailTest } });
  });
  expect(emaillInputEl.value).toBe(emailTest);

  const passwordInput = screen.getByPlaceholderText("Password");
  const passwordTest = "123456";
  await act(async () => {
    fireEvent.change(passwordInput, { target: { value: passwordTest } });
  });
  expect(passwordInput.value).toBe(passwordTest);
  
});
