import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element: Element }, index) => (
          <Route key={index} path={path} element={<Element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
