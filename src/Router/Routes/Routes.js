import { createBrowserRouter } from "react-router-dom"
import Card from "../../components/Card/Card";
import Main from "../../Layout/Main";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Card></Card>,
                loader:()=> fetch('http://localhost:5000/services')
            },
        ]
    }
])
export default router;