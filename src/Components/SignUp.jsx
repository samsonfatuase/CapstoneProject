
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from "axios"

export default function SignUp() {
    const navigate = useNavigate();
    const [fullname, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlesignUp = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:3000/api/register", {
            fullname,
            password,
            email,
            confirmpassword,
          });
          if (response.data.error) {
            setError(response.data.error);
            return;
          }
          navigate("/login");
    
        } catch (error) {
          throw error;
        }
    };
    return (
      <div id='sign'>
          <p id='register'> Register and get started for FREE!!!</p>
          <p id='re'>EKITI STATE <br/>
          VIRTUAL LEARNING HUB</p>
          <form onSubmit={handlesignUp} id='form'>
              <input  

                  type="text"
                  placeholder="Full Name"
                  value={fullname}
                  id='form1'
                  onChange={(e) => setfullName(e.target.value)}
              />  
              <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  id='form2'
                  onChange={(e) => setEmail(e.target.value)}
              />
              <input
                  type="password"
                  placeholder="Password"
                  id='form3'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              <input
                  type="confirmpassword"
                  placeholder="confirm Password"
                  value={password}
                  id='form4'
                  onChange={(e) => setconfirmpassword(e.target.value)}
              />
              {error && <p>{error}</p>}
              <button
              id='form5' 
              type="submit">
                SignUp
                </button>
          </form>
      </div>
    )
  }



