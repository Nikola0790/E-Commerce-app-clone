import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { actionSignInUser } from '../../redux/user/actions';


const SignInScreen = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.userSignIn);
    const {userInfo} = userData;
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(actionSignInUser(email, password));
    }

    useEffect(() => {
        if (userInfo !== null) {
            navigate("/home");
        } else {
            navigate("/signin");
        }
    }, [userInfo]);

    return (
        <div className='signInScreen'>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)}/>    
                </div>
                <div>
                    <button type="submit">Sign In</button>
                </div>
                <div>
                    <p>New customer? {' '} <Link to="/register">Create your account</Link></p>
                </div>    
            </form>
        </div>
    )
}

export default SignInScreen;