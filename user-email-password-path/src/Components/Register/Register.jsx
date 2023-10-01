import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.email.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name,email, password,accepted);

    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Need a uppercase");
      return;
    }
    else if(!accepted){
      setRegisterError('Confirm terms and condition')
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User created successfully");

        // updateProfile
        updateProfile(result.user,{
          displayName:name,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
        .then(()=> {
          console.log('Profile updated')
        })
        .catch(error => {
          console.log(error.message)
        })

        // send verification email;
        sendEmailVerification(result.user)
        .then(()=> {
          alert("Please check your email and verify account")
        })
        .catch(error => {
          console.log(error.message)
        })
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full px-4 py-2"
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
            required
          />
          <br />
          <input
            className="mb-4 w-full px-4 py-2"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />
          <br />
          <div className="relative mb-4">
            <input
              className="w-full px-4 py-2"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
            />
            <span
              className="absolute top-3 right-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
          </div>
          <br />
          <div className="mb-4">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept our
              <a href="">terms and conditions</a>
            </label>
          </div>
          <input
            className="btn btn-secondary w-full"
            type="submit"
            value="Register"
          />
        </form>
        {registerError && <p className="text-red-700">{registerError}</p>}
        {success && <p className="text-green-600">{success}</p>}
       <p>Already Have An Account ?
        <Link to='/login'> Please Login</Link>
       </p>
      </div>
    </div>
  );
};

export default Register;
