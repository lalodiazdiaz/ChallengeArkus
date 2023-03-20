import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import Users from "../Components/CrudUser/Users";

test("renders teams screen", () => {
  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
  screen.debug();
});

test("User name input should be rendered", () => {
  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
  const userNameinput = screen.getByTestId("nameInput");
  expect(userNameinput).toBeInTheDocument();
});

test("Email name input should be rendered", () => {
  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
  const emailInput = screen.getByTestId("emailInput");
  expect(emailInput).toBeInTheDocument();
});

test("Password name input should be rendered", () => {
  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
  const passInput = screen.getByTestId("passInput");
  expect(passInput).toBeInTheDocument();
});

test("Rol Select should be rendered", () => {
  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
  const rangeSelect = screen.getByTestId("rangeSelect");
  expect(rangeSelect).toBeInTheDocument();
});

test("English level input should be rendered", () => {
  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
  const englishLevelInput = screen.getByTestId("englishInput");
  expect(englishLevelInput).toBeInTheDocument();
});

test("CV input should be rendered", () => {
  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
  const cvInput = screen.getByTestId("cvInput");
  expect(cvInput).toBeInTheDocument();
});

test("knowledge input should be rendered", () => {
  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
  const knowledgeInput = screen.getByTestId("knowledgeInput");
  expect(knowledgeInput).toBeInTheDocument();
});

test("Save buttonshould be rendered", () => {
  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
  const buttonSave = screen.getByTestId("saveButton");
  expect(buttonSave).toBeInTheDocument();
});

test("Inputs should be empty", () => {
  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
  const userNameinput = screen.getByTestId("nameInput");
  expect(userNameinput.value).toBe("");
  const emailInput = screen.getByTestId("emailInput");
  expect(emailInput.value).toBe("");
  const passInput = screen.getByTestId("passInput");
  expect(passInput.value).toBe("");
  const rangeSelect = screen.getByTestId("rangeSelect");
  expect(rangeSelect.value).toBe("");
  const englishInput = screen.getByTestId("englishInput");
  expect(englishInput.value).toBe("");
  const cvInput = screen.getByTestId("cvInput");
  expect(cvInput.value).toBe("");
  const knowledgeInput = screen.getByTestId("knowledgeInput");
  expect(knowledgeInput.value).toBe("");
});


test("Team name input should change", async () => {
    render(
      <BrowserRouter>
        <Users />
      </BrowserRouter>
    );
    const userNameinput = screen.getByTestId("nameInput");  
    const emailInput = screen.getByTestId("emailInput");
    const passInput = screen.getByTestId("passInput");
    const englishInput = screen.getByTestId("englishInput");
    const cvInput = screen.getByTestId("cvInput");
    const knowledgeInput = screen.getByTestId("knowledgeInput");


    const dataTest = {
        name:'Eduardo',
        email:'eduardo@gmail.com',
        pass:'12345',
        range:'admin',
        englishLevel:'C1',
        cv:'http://cv.com',
        knowledge:'React'
    };
    await act(async() => {
      fireEvent.change(userNameinput, { target: { value: dataTest.name } });
      fireEvent.change(passInput, { target: { value: dataTest.pass } });
      fireEvent.change(emailInput, { target: { value: dataTest.email } });
      fireEvent.change(englishInput, { target: { value: dataTest.englishLevel } });
      fireEvent.change(cvInput, { target: { value: dataTest.cv } });
      fireEvent.change(knowledgeInput, { target: { value: dataTest.knowledge } });
    });
  
    expect(userNameinput.value).toBe(dataTest.name);
    expect(passInput.value).toBe(dataTest.pass);
    expect(emailInput.value).toBe(dataTest.email);
    expect(englishInput.value).toBe(dataTest.englishLevel);
    expect(cvInput.value).toBe(dataTest.cv);
    expect(knowledgeInput.value).toBe(dataTest.knowledge);
  });