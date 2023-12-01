import routes from "~react-pages";
import { useRoutes } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}

export default App;
