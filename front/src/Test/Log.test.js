import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import CrudLog from '../Components/CrudLog/CrudLog'

test("renders Log screen", () => {
    render(
      <BrowserRouter>
        <CrudLog />
      </BrowserRouter>
    );
    screen.debug();
  });
