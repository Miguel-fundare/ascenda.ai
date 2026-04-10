import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Solutions } from "./pages/Solutions";
import { UseCases } from "./pages/UseCases";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "solutions", Component: Solutions },
      { path: "use-cases", Component: UseCases },
      { path: "faq", Component: FAQ },
      { path: "contact", Component: Contact },
    ],
  },
]);
