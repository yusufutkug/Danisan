import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

import "./styles/global.scss"



import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";



function App() {

  const Layout = () =>{
    return (
      <div className="main">

          <div className="leftContainer" >
            <Sidebar />
          </div>
          <div className="rightContainer">
            <Topbar />
            <Content/>

          </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home  />
        }
      ]
    },
    
  ]);

  return <RouterProvider router={router} />;
  
}

export default App
