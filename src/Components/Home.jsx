import React, { useState } from 'react';

export default function Home() {
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]= useState('');

  const handleButtonClick = () => {
    setShowSignInForm(!showSignInForm);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here, e.g., send username and password to the server
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form fields after sign-in
    setUsername('');
    setPassword('');
  };

  const handlePronunciationButtonClick = () => {
    console.log('Start practicing pronunciation!');
    
  };

  const handleSpellingButtonClick = () => {
    console.log('Spell it');
    
  };
  
  const handleWritingButtonClick = () => {
    console.log('Writing');
    
  };

  return (
    <>
      <div id='t'>
        <p >
          A BEST WAY TO LEARN <br />
          Ekiti Virtual Learning Hub helps students to <br />
          develop their academic communication, <br />
          research and study skills
        </p>
      
      {showSignInForm ? ( 
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            id='form1'
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            id='form2'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
      ) : (
        <button onClick={handleButtonClick}>Login</button>
      )}
      </div>


      <div id='iy'>
      <button onClick={handleWritingButtonClick} id='itt'>Writing</button>
    
        <button onClick={handleSpellingButtonClick} id='ittt'>Spelling</button>

        <button onClick={handlePronunciationButtonClick} id='itttt'>Practice Pronunciation</button>
      </div>
    </>
  );
}








// import React, {useState} from 'react'
// // import {Link} from "react-router-dom"
// export default function Home() {
//     const [click, setClick] = useState ('');

//     // const handleClick = () => setClick (click);
//     // const LearnMore = () => setClick(false)

//   return (
//     <>
//     <div id='t' >  
//       <p >
//         A BEST WAY TO LEARN <br></br>
//         Ekiti Virtual Learning Hub helps students to <br /> 
//         develop their academic communication, <br /> 
//         research and study skills
//       </p>
      
//     </div>
//     <button>
//         Get started
//     </button>
    
//     </>
//   )


// }
