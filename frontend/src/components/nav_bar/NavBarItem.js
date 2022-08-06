import { Link } from "react-router-dom";

export default function NavbarItem(props){
    return(
        <li class="nav-item pe-3 ps-2 pt-3 pb-3 p-sm-4 p-md-4 p-lg-4 p-xl-4 p-xxl-4">
            <Link to={props.path} className={"bold fw-bold"}>
                {props.title}
            </Link>
        </li>
    );
}