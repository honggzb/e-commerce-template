import { useState, useEffect } from 'react';
import './SignUp.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, provider } from '../../firebase/firebase.utils';

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    //const formJson = Object.fromEntries(formData.entries());
    alert(formData.get('email'));
  }

  return (
    <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput 
              label={'display Name'} 
              otherProps={{ name:'displayName', value: displayName, type:'displayName', required: 'required '}} 
              handleChange={e => setDisplayName(e.target.value)} />
            <FormInput 
              label={'Email'} 
              otherProps={{ name:'email', value: email, type:'email', required: 'required '}} 
              handleChange={e => setEmail(e.target.value)} />
            <FormInput 
              label={'Password'} 
              otherProps={{ name:'password', value: password, type:'password', required: 'required '}} 
              handleChange={e => setPassword(e.target.value)} />
            <FormInput 
              label={'Confirm Password'} 
              otherProps={{ name:'confirmPassword', value: confirmPassword, type:'password', required: 'required '}} 
              handleChange={e => setConfirmPassword(e.target.value)} />
            <CustomButton inverted={false} type='submit'> Sign Up </CustomButton> 
        </form>
    </div>
  )

}

export default SignUp;