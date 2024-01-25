import SignUp from "../../components/Sign-up/SignUp";
import Signin from "../../components/sign-in/Signin";
import './SigninSignup.scss';

const SigninSignup = () => {
  
  return (
    <div className='sign-in-sign-up'>
        <Signin /> 
        <SignUp />
    </div>
  )
} 


export default SigninSignup;