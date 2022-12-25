import { useState } from "react";
import './App.css';
 import axios from "axios";




function App() {
  const [email, setEmail] = useState('')
  const [name, setname] = useState('')
  const [phonenumber, setPhone] = useState('')

  console.log({ email,name,phonenumber })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlename= (e) => {
    setname(e.target.value)
  }
  const handlePhone= (e) => {
    setPhone(e.target.value)
  }

  const handleApi = () => {
    console.log({ email})
    axios.post('https://mint-forms.ieee-mint.org/api/form/addresponse?formld=task', {
      // email: email,
      // password: password

    }).then(result => {
      console.log(result.data)
      alert('success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }

  return (
    <div  className="App">
     <div className="col-md-3 center">
      {/* <h1>USER SERVICE CONTACT-IEEE</h1> */}
      {/* Email : <input value={email} onChange={handleEmail} type="text" /> <br /><br/>
      Password : <input value={password} onChange={handlePassword} type="text" /> <br /> */}
      {/* <button onClick={handleApi} >Login</button> */}
      <form action="/action_page.php">
<label>First Name</label>
<input value={name} onChange={handlename} type="text"id="fname"name="firstname"placeholder="Your name.."/><br></br>
<br></br><label>Last Name</label>
<input type="text"id="lname" onChange={handlename}name="lastname" placeholder="Your last name.."/><br></br>

<br></br>
<label>Email</label>
<input value={email} onChange={handleEmail} type="email"id="email"name="email"placeholder="Your email"/><br></br>
<br></br>
<label>Phone</label>
<input type="Phone"id="phone"name="phone"onChange={handlePhone}placeholder="Your phonenumber"/><br></br>
<br></br>
<label>Message</label>
<textarea id="subject"name="subject"placeholder="Write something.."></textarea><br></br>
<br></br>
<h6>Services</h6>
<br></br>
<input type="checkbox" name="veggies" id="veg1" value="tomato" onclick="return       ValidateSelection();"/>
<label for="veg1">web designing</label>
<input form="myForm" type="checkbox" name="veggies" id="veg2"  value="onion" onclick="return ValidateSelection();"/> 
<label for="veg2">UI/UX</label>
<input form="myForm" type="checkbox" name="veggies" id="veg3"  value="lettuce" onclick="return ValidateSelection();"/> 
<label for="veg3">Research</label>
<input type="checkbox" name="veggies" id="veg4" value="capsicum" disabled/> 
<label for="veg4">Others</label>
{/* <input type="checkbox" name="fruit" value="Apple"> Apple</input>
<input type="checkbox" name="fruit" value="Orange"> Orange </input>
<input type="checkbox" name="fruit" value="Banana"> Banana </input> */}
<br></br>
<input type="submit" class="button" value="Submit"/><br></br>
<br></br>

</form>
  
    </div>
    </div>
  );
}

export default App;