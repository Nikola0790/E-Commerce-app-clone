import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionSignOut } from "../../redux/user/actions"

const Header = () => {

    const userData = useSelector((state) => state.userSignIn );
    const { userInfo } = userData;
    const dispatch = useDispatch();
    const signOutHandler = () => {
        dispatch(actionSignOut);
    }

    return (
        <header>
            <div className="company-name"><h1>E-Commerce</h1></div>
            <div className="header-menu">
                <Link className="header-menu__cart" to="/cart">Cart</Link>
                <Link className="header-menu__options" to="/signin">{(userInfo !== null) ? ( 
                    <div className=""> 
                        <Link className="username" to="/user"> {userInfo.data.name} </Link> 
                        <ul className="dropdown">
                            <li>
                                <Link to="/signin" onClick={signOutHandler}>Sign out</Link>
                            </li>
                        </ul>
                    </div> ) : 
                    ("Sign In")} 
                </Link>
            </div>
        </header>
    )
}

export default Header;