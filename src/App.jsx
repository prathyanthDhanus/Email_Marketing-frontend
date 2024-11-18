import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";


function App() {
 

  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <RouterProvider router={router}/>
    </>
  )
}

export default App
