import { fireEvent, render, screen, getByTestId } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import TeamList from "../Components/TeamList/TeamList";

// import { rest } from 'msw'
// import { setupServer } from 'msw/node'


// const server = setupServer(
//   // Describe the requests to mock.
//   rest.get("http://localhost:5000/api/v1/teams/getTeams", (req, res, ctx) => {
//     return res(ctx.json([
//         {
//             "_id": "64138d42db95d3a14a8a54e3",
//             "teamName": "arkus",
//             "__v": 0
//         }
//     ]));
//   }),
// )

// beforeAll(() => {
//   // Establish requests interception layer before all tests.
//   server.listen()
// })
// afterAll(() => {
//   // Clean up after all tests are done, preventing this
//   // interception layer from affecting irrelevant tests.
//   server.close()
// })

describe('Team list', () => { 

  
test("renders team screen", () => {
  render(
    <BrowserRouter>
      <TeamList />
    </BrowserRouter>
  );
  screen.debug();
});


  test("Elements should be rendered", () => {
    render(
      <BrowserRouter>
        <TeamList />
      </BrowserRouter>
    );
    const teamnameInput = screen.getByPlaceholderText("team's name");
    const buttonSave = screen.getByRole("button");
    expect(teamnameInput).toBeInTheDocument();
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

  //   test('get all teams', async () => {
      
  //     render(
  //       <BrowserRouter>
  //         <TeamList />
  //       </BrowserRouter>
  //     );

  //   const teamName = await screen.findAllByText(/arkus/i);

  //   expect(teamName).toBeInTheDocument()

  //   });
  })