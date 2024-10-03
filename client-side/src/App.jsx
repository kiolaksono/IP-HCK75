import { useEffect } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import { router } from "./routers";
import axios from "axios";
import { Provider } from "react-redux";
import {store} from './app/store'

function App() {
  return (
  <Provider store = {store}>

    <RouterProvider router={router} />;

  </Provider>  
  )
}

export default App;
