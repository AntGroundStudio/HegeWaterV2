import { Outlet } from "react-router-dom";
import NavBar from "./components/nav_bar/NavBar";

function App() {

  const NavLinks = [
    {NavName:"Source", NavPath:"/source"},
    {NavName:"Explore", NavPath:"/explore"},
    {NavName:"FAQs", NavPath:"/faq"},
    {NavName:"Shop", NavPath:"/shop"},
  ]
  
  return (
    <div>
      <NavBar NavLinks={NavLinks}/>
      <Outlet />
    </div>
  );
}

export default App;
