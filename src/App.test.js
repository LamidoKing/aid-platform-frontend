import indexRoutes from "routes/index";
import { render, screen, fireEvent, cleanup } from "./testCustomRender";
import App from "./App";
import Auth from "Layouts/Auth";
import { Switch, Route } from "react-router-dom";
import Pages from "Layouts/Pages/Pages";
import Home from "Layouts/Home/Home";
import L from "Pages/AuthPages/LogIn";

describe("Should render <App />", () => {
  afterEach(cleanup);
  // your test
  test("Should render page header and HomePage on default route", () => {
    // Arrange

    // Act
    render(<Home />);

    expect(screen.getByText(/Leaflet/i)).toBeInTheDocument();

    expect(screen.getByText(/LogIn/i)).toBeInTheDocument();
    expect(screen.getByText(/LogIn/i).closest("a")).toHaveAttribute(
      "href",
      "/auth/login"
    );

    expect(screen.getByText(/SignUp/i)).toBeInTheDocument();
    expect(screen.getByText(/SignUp/i).closest("a")).toHaveAttribute(
      "href",
      "/auth/signup"
    );
  });
});
