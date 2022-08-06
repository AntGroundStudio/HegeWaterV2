import NavbarItem from "./NavBarItem";
import './Navbar.css'
import HegeLogo from './Logo';

export default function NavBar(props){

    const NavBarItemComponents = props.NavLinks.map( (d, i) => <NavbarItem key={i} title={d.NavName} path={d.NavPath}/>)

    return(
        <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#"><HegeLogo/></a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 ms-auto me-5">
                    {NavBarItemComponents}
                </ul>
            </div>
            </div>
        </nav>
    )
}