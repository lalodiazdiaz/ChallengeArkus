import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import TeamList from "../Components/TeamList/TeamList";



test("renders teams screen", () => {
    render(
      <BrowserRouter>
        <TeamList />
      </BrowserRouter>
    );
    screen.debug();
  });

  test("inputs should be rendered", () => {
    render(
      <BrowserRouter>
        <TeamList />
      </BrowserRouter>
    );
    const teamnameInput = screen.getByPlaceholderText("team's name");
    expect(teamnameInput).toBeInTheDocument();
  });


  test("Button should be rendered", () => {
    render(
      <BrowserRouter>
        <TeamList />
      </BrowserRouter>
    );
    const buttonSave = screen.getByRole("button");
    expect(buttonSave).toBeInTheDocument();
  });
  
  test("Team name input should be empty", () => {
    render(
      <BrowserRouter>
        <TeamList />
      </BrowserRouter>
    );
    const teamnameInput = screen.getByPlaceholderText("team's name");
    expect(teamnameInput.value).toBe("");
  });

  test("Team name input should change", async () => {
    render(
      <BrowserRouter>
        <TeamList />
      </BrowserRouter>
    );
    const teamnameInput = screen.getByPlaceholderText("team's name");
    const teamNameTest = "Bootcamp";
    await act(async() => {
      fireEvent.change(teamnameInput, { target: { value: teamNameTest } });
    });
  
    expect(teamnameInput.value).toBe(teamNameTest);
  });