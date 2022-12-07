
import {useState} from "react"
import '../styles/Login.css'
import { userLogin } from 'uat/api'
 

const Login = () => {
     

  const [inputs, setInputs] = useState({})
  const {email, password} = inputs;

  const onChange = e => {
    e.preventDefault()
    const {value, name} = e.target
    setInputs({...inputs, [name]: value})
  }

  const onClick = e => {
    e.preventDefault()
    const request = {email, password}
    alert(`사용자 이름: ${JSON.stringify(request)}`)
    userLogin(request)
    .then((res)=>{
      console.log(`Response is ${res.config.data}`)
      localStorage.setItem('token',JSON.stringify(res.config.data))
    })  
    .catch((err)=>{  
      console.log(err)
      alert('아이디와 비밀번호를 다시 입력해주세요')
    }) 
  }

  return (
  <>
    {/* <form action="/action_page.php" method="post">
    <div class="imgcontainer">
    <img src={aaaa} alt="Avatar" class="avatar"/>
    </div>
   <div class="container" style={{backgroundcolor:'#f1f1f1'}}>
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
    </div> 
    </form> */}

 
  EMAIL: <input type ="text" name="email" onChange={onChange}/><br/>
  PASSWORD: <input type ="text" name="password" onChange={onChange}/><br/>
  <button onClick={onClick}> 로그인 </button>
  </>)}

//   return(<>





//   <div class="container">
//     <label for="uname"><b>Username</b></label>
//     <input type="text" placeholder="Enter Username" name="uname" required/>

//     <label for="psw"><b>Password</b></label>
//     <input type="password" placeholder="Enter Password" name="psw" required/>
        
//     <button type="submit">Login</button>
//     <label>
//       <input type="checkbox" checked="checked" name="remember"/> Remember me
//     </label>
//   </div>



export default Login