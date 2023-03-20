import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Account from '../Components/CrudAccount/Account'
import { act } from "react-dom/test-utils";


test("renders Account screen", () => {
    render(
      <BrowserRouter>
        <Account />
      </BrowserRouter>
    );
    screen.debug();
  });

  test("Acoount name input should be rendered", () => {
    render(
      <BrowserRouter>
        <Account />
      </BrowserRouter>
    );
    const accountNameInput = screen.getByPlaceholderText("Account name");
    expect(accountNameInput).toBeInTheDocument();
  });

  test("Client input should be rendered", () => {
    render(
      <BrowserRouter>
        <Account />
      </BrowserRouter>
    );
    const clientName = screen.getByPlaceholderText("Client name");
    expect(clientName).toBeInTheDocument();
  });
  
  test("Operation manager input should be rendered", () => {
    render(
      <BrowserRouter>
        <Account />
      </BrowserRouter>
    );
    const operationManager = screen.getByPlaceholderText("Operations manager name");
    expect(operationManager).toBeInTheDocument();
  });
  
  test("Save button should be rendered", () => {
    render(
      <BrowserRouter>
        <Account />
      </BrowserRouter>
    );
    const buttonSave = screen.getByRole("button");
    expect(buttonSave).toBeInTheDocument();
  });
  
  test("Account name input should be empty", () => {
    render(
      <BrowserRouter>
        <Account />
      </BrowserRouter>
    );
    const accountNameInput = screen.getByPlaceholderText("Account name");
    expect(accountNameInput.value).toBe('');
  });
  
  test("Client input should be empty", () => {
    render(
      <BrowserRouter>
        <Account />
      </BrowserRouter>
    );
    const clientName = screen.getByPlaceholderText("Client name");
    expect(clientName.value).toBe("");
  });

  test("Operations manager input should be empty", () => {
    render(
      <BrowserRouter>
        <Account />
      </BrowserRouter>
    );
    const operationManager = screen.getByPlaceholderText("Operations manager name");
    expect(operationManager.value).toBe("");
  });
  
  test("Account name input should change", async () => {
    render(
      <BrowserRouter>
        <Account />
      </BrowserRouter>
    );
  
    const accountNameInput = screen.getByPlaceholderText("Account name");
    const accountTest = "Arkus";
  
    await act( async () => {
      fireEvent.change(accountNameInput, { target: { value: accountTest } });
     });
  
    expect(accountNameInput.value).toBe(accountTest);
  });
  
  test("Client input should change", async () => {
    render(
      <BrowserRouter>
        <Account />
      </BrowserRouter>
    );
    const clientInput = screen.getByPlaceholderText("Client name");
    const clientTest = "Victor";
    await act(async() => {
      fireEvent.change(clientInput, { target: { value: clientTest } });
    });
  
    expect(clientInput.value).toBe(clientTest);
  });

  test("Operation manager input should change", async () => {
    render(
      <BrowserRouter>
        <Account />
      </BrowserRouter>
    );
    const OperationInput = screen.getByPlaceholderText("Operations manager name");
    const operationTest = "Victor";
    await act(async() => {
      fireEvent.change(OperationInput, { target: { value: operationTest } });
    });
    expect(OperationInput.value).toBe(operationTest);
  });