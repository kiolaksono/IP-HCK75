import { useEffect } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import { router } from "./routers";
import axios from "axios";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
