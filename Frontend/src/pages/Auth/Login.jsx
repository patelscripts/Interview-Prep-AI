import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
function Login({ setCurrentPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const {updateUser} = useContext(UserContext)
  const navigate = useNavigate();

  // handle login form submit
  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)){
        setError("Please enter valid email address.")
        return;
    }

    if(!password){
        setError("please enter the password");
        return;
    }

    setError("");
    //login api call
    try{
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN,{
        email,
        password
      });

      const {token} = response.data;
      if(token){
        localStorage.setItem("token", token);
        updateUser(response.data)
        navigate("/dashboard")
      }
    }catch(error){
        if(error.response && error.response.data.message){
            setError(error.response.data.message);
        }else{
            setError("Something went wrong . Please try again.")
        }
    }

  };
  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Please fill your details here to log in
      </p>
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="npians@gmail.com"
        />
        <Input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Enter Your Password "
          placeholder="min 8 characters"
        />

        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
        <button
          type="submit"
          className="text-center p-2 bg-black text-white w-full mt-2 rounded-lg cursor-pointer hover:bg-amber-200 hover:text-gray-800"
        >
          LOGIN
        </button>
        <p className="text-[13px] text-slate-800 mt-3 font-semibold">
          Don't have an account?{" "}
          <button
            className="font-medium text-amber-300 underline cursor-pointer"
            onClick={() => {
              setCurrentPage("signup");
            }}
          >
            SignUp
          </button>
        </p>
      </form>
    </div>
  );
}
export default Login;
