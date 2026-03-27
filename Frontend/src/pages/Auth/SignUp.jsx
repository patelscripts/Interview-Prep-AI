import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import ProfilePhotoselector from "../../components/Inputs/ProfilePhotoselector";
import { validateEmail } from "../../utils/helper";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import uploadImage from "../../utils/uploadImage";
function SignUp({ setCurrentPage }) {
  const [profilePic, setProfilePic] = useState(null);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {updateUser} = useContext(UserContext)
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";
    if (!fullname) {
      setError("Please enter your full name.");
      return;
    }

    if (!validateEmail(email)) {
      setError("please enter your valid email address");
      return;
    }

    if (!password) {
      setError("please enter your password");
      return;
    }

    setError("");

    //signup api call
    try {
      if(profilePic){
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || ""
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER,{
        name : fullname,
        email,
        password,
        profileImageUrl
      });

      const {token} = response.data;
      if(token){
        localStorage.setItem("token", token);
        updateUser(response.data);
        navigate("/dashboard")
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong . Please try again.");
      }
    }
  };
  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center ">
      <h3 className="text-lg font-semibold text-black"> Create an Account</h3>
      <p className="text-xs text-slate-800 mt-[5px] mb-6">
        Joining us today by entering your details below
      </p>

      <form onSubmit={handleSignup}>
        <ProfilePhotoselector image={profilePic} setImage={setProfilePic} />
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          <Input
            value={fullname}
            onChange={({ target }) => setFullname(target.value)}
            label="Full Name"
            placeholder="npians"
            type="text"
          />

          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email address"
            placeholder="npians@gmail.com"
            type="email"
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 charcters"
            type="password"
          />
        </div>

        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

        <button
          type="submit"
          className="text-center p-2 bg-black text-white w-full mt-2 rounded-lg cursor-pointer hover:bg-amber-200 hover:text-gray-800"
        >
          SIGN UP
        </button>

        <p className="text-[13px] text-slate-800 mt-3 font-semibold">
          Already an account?{" "}
          <button
          type="button"
            className="font-medium text-amber-300 underline cursor-pointer"
            onClick={() => {
              setCurrentPage("login");
            }}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
