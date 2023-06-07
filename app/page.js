import Header  from "./components/Header"
import RootLayout from "./layout"
import Signup from "./pages/signup";
import  Login  from "./pages/login";
export default function Home() {
  return (
      <RootLayout>
      <div className="h-full bg-[url(https://wpengine.com/builders/wp-content/uploads/wordpress-default-gradients.jpg)]  bg-cover  ">  
        <Header/>
        {/* <Signup/> */}
        <Login/>
        </div>
  
    </RootLayout>
  
  )
}
