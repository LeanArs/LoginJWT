// import Login from "./pages/login";
import Register from "./pages/register";

//Rotas

export default function App(){
  return(
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Register/>
      </div>
      <div className="hidden lg:flex h-full bg-gray-200">
        <div>hello</div>
      </div>
    </div>
  )
}