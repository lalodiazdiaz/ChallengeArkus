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

test("Elements should be rendered", () => {
  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
  const userNameinput = screen.getByTestId("nameInput");
  const emailInput = screen.getByTestId("emailInput");
  const passInput = screen.getByTestId("passInput");
  const rangeSelect = screen.getByTestId("rangeSelect");
  const englishLevelInput = screen.getByTestId("englishInput");
  const cvInput = screen.getByTestId("cvInput");
  const knowledgeInput = screen.getByTestId("knowledgeInput");
  const buttonSave = screen.getByTestId("saveButton");

  expect(userNameinput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passInput).toBeInTheDocument();
  expect(rangeSelect).toBeInTheDocument();
  expect(englishLevelInput).toBeInTheDocument();
  expect(cvInput).toBeInTheDocument();
  expect(knowledgeInput).toBeInTheDocument();
  expect(buttonSave).toBeInTheDocument();
});


test("Inputs should be empty", () => {
  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
  const userNameinput = screen.getByTestId("nameInput");
  const emailInput = screen.getByTestId("emailInput");
  const passInput = screen.getByTestId("passInput");
  const rangeSelect = screen.getByTestId("rangeSelect");
  const englishInput = screen.getByTestId("englishInput");
  const cvInput = screen.getByTestId("cvInput");
  const knowledgeInput = screen.getByTestId("knowledgeInput");
  
  expect(userNameinput.value).toBe("");
  expect(emailInput.value).toBe("");
  expect(passInput.value).toBe("");
  expect(rangeSelect.value).toBe("");
  expect(englishInput.value).toBe("");
  expect(cvInput.value).toBe("");
  expect(knowledgeInput.value).toBe("");
});


test("inputs should change", async () => {
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