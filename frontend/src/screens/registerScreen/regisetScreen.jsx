import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/error/error";
import { actionRegisterUser } from "../../redux/user/actions";

const RegisterScreen = () => {
  const userData = useSelector((state) => state.userRegister);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo, loading, error } = userData;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password aren't match!");
    } else {
      dispatch(actionRegisterUser(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo !== null) {
      navigate("/home");
    } else {
      navigate("/register");
    }
  }, [userInfo]);

  return (
    <div className="registerScreen">
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Create account</h1>
        </div>
        {error != "" ? Error(error) : ""}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPass">Password</label>
          <input
            type="password"
            id="confirmPass"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
        <div>
          <p>
            Already have an account? <Link to="/signin">Sign-in</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
