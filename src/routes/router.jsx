import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home";
import Services from "../components/Services";
import My_Profile from "../components/My_Profile";
import ViewDetails from "../components/ViewDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
               path: "services",
               element: <Services></Services>
            },
            {
                path: "my-profile",
                element: <My_Profile></My_Profile>
            },
            {
                path: "view-details",
                element: <ViewDetails></ViewDetails>
            }
        ]
    }
])
export default router;