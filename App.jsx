import React, {useState} from 'react'
function App() {
  const [Name,setName]=useState("")
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")
  const [submittedData,setSubmittedData]=useState(null)
  const handleSubmit=(e)=>{
      e.preventDefault();
      const formData={Name,Email,Password}
      setSubmittedData(formData);
      setName("")
      setEmail("")
      setPassword("")
  }
 return (
  <div>
    <h1>Form</h1>
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text"
      placeholder='Enter your Name'
      value={Name}
      onChange={(e)=>setName(e.target.value)}/>

      <label>Email</label>
      <input type="Email"
      placeholder='Enter your Email'
      value={Email}
      onChange={(e)=>setEmail(e.target.value)}/>

    <label>email</label>
      <input type="Password"
      placeholder='Enter your Password'
      value={Password}
      onChange={(e)=>setPassword(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>

    {submittedData &&(
     <div>
      <h2>submitted data's</h2>
      <p><strong>Name:</strong>{submittedData.Name}</p>
      <p><strong>Email:</strong>{submittedData.Email}</p>
      <p><strong>Password:</strong>{submittedData.Password}</p>
     </div>
    )}
    
       
  </div>
     
  )
}

export default App
