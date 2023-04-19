import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ListaSwip from "./ListaSwip";

// import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    <ListaSwip />
  </StrictMode>
);
