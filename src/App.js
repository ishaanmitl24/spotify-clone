import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Signup from "../src/pages/Signup";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import Main from "./pages/Main";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import Songs from './pages/Songs';
import AlbumSongs from "./pages/AlbumSongs";
import { auth } from "./store/firebase";
import { fetchUserData, sendUserData} from "./store/userAction";
import { useDispatch, useSelector } from "react-redux";

const client = new QueryClient();
const router = createBrowserRouter([
  { path: "/", element: <Signup /> },
  { path: "login", element: <Login /> },
  {
    path: "login/home",
    element: <Home />,
    children: [
      { index:true, element: <Main /> },
      { path: "artist", element: <Artists /> },
      {path:'album',element:<Albums/>},
      {path:'artist/:id',element:<Songs/>},
      {path:'album/:id',element:<AlbumSongs/>}
    ],
  },
]);

function App() {
  const sign = useSelector((state) => state.sign);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    if (sign.email === null) {
      return;
    }
    if (sign.email) {
      dispatch(sendUserData({ email: sign.email, user: sign.user }));
    }
  }, [dispatch, sign.email,auth]);


  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
