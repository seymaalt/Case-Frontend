import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {routes.map(({ path, element: Element }, index) => (
        <Route key={index}>
          <Route key={index} path={path} element={<Element />} />
        </Route>
      ))}
    </Routes>
    </BrowserRouter>

  );
}

export default App;
