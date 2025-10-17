import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";



const Register = () => {
  // state to store email
  const [email, setEmail] = useState("");
  const [age1, setAge] = useState(13);

  // handle form submission
  function handleRegister(e) {
    e.preventDefault(); // prevent page reload
    console.log("Form submitted");
    console.log("Email entered:", email);
  }
  function increaseAge(e) {
     e.preventDefault();// e.preventDEFAUT MATLAB PAGE RELOAD NA HO apne aap
    setAge(age1 + 1);
  }
  useEffect(() => { 
  
    console.log("age",age1);
  }, [age1]); //[] empty dependency array means this effect runs once after initial render
  // means to yehi hai ki component jab render hoga tabhi ye useEffect chalega
  // [age1]->this is a dependency array.we provide ths with state variables or any variables 
  // ke jab values change ho tabhi ye useeffect bhi show ho
   

  // demo variables
  let age = 18;
  let emailId = "raghav@gmail.com";

  return (
    <form onSubmit={handleRegister}>
      {age >= 18 && emailId === "raghav@gmail.com" ? (
        <div>
          <h1>{age1}</h1>
          <button onClick={increaseAge}>Increase Age</button>
          <input
            className="form-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // update state ke vlaues jab user type kare
            // aur sath ki sath render kare to value update ho jae.
            // aur ye e.target.value ka use karke hum input field ka value le rhe hai
          />
          <input
            className="form-input"
            type="password"
            placeholder="Enter your password"
          />
          <button type="submit">Submit</button>
        </div>
      ) : (
        <h1>You are a small kid</h1>
      )}
    </form>
  );
};

export default Register;
