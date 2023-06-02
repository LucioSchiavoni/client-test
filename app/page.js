import Header  from "./components/Header"
import RootLayout from "./layout"
import Signup from "./pages/signup"

export default function Home() {
  return (
   
      <RootLayout>
        <div className="gap-10">
        <div className="">
        <Header/>
        </div>
    <div className="h-screen bg-white  ">
   
  
      <Signup/>
 
    </div>
    </div>
    </RootLayout>
   
  )
}
