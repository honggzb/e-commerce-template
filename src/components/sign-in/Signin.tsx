import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Signin.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, provider } from '../../firebase/firebase.utils';
import { setCurrentUser } from '../../store/user.slice';

const Signin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /**
   * Cross-Origin-Opener-Policy policy would block the window.closed call error while using google auth
   * 
   * changed the method from "signInWithPopup" to "signInWithRedirect".
   * But with this method, need to handle this redirect with "useEffect" hook
   * 
   * https://stackoverflow.com/questions/76446840/cross-origin-opener-policy-policy-would-block-the-window-closed-call-error-while
   * 
   */
  useEffect(() => {
      auth.getRedirectResult().then(response => {
          if (!response) return
            console.log(response);
          if(response.user) {
            dispatch(setCurrentUser(response.user.email));
            navigate("/");
          }
      }).catch(error => {
          console.error(error);
      })
  }, []);

  // useEffect(() => {
  //   auth.onAuthStateChanged(async userAuth => {
  //     if(userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);
  //       userRef.onSnapshot(snapShot => {
  //           currentUser = {
  //             id: snapShot.id,
  //             ...snapShot.data()
  //           }
  //       });
  //     }
  //   });
  //  }, []);


  const onClick = () =>
    auth.signInWithRedirect(provider).catch(error => {
        console.error(error);
    })

  const handleSumbit = (e) => {
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    //const formJson = Object.fromEntries(formData.entries());
    alert(formData.get('email'));
  }

  return (
    <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSumbit}>
            <FormInput 
              label={'Email'} 
              otherProps={{ name:'email', value: email, type:'email', required: 'required '}} 
              handleChange={e => setEmail(e.target.value)} />
            <FormInput 
              label={'Password'} 
              otherProps={{ name:'password', value: password, type:'password', required: 'required '}} 
              handleChange={e => setPassword(e.target.value)} />
              <div className="buttons">
                  <CustomButton type='submit'> Sign in </CustomButton> 
                  <CustomButton onClick={onClick} isGoogleSignIn> Sign in with Google</CustomButton> 
              </div>
        </form>
    </div>
  )
  
}

export default Signin;