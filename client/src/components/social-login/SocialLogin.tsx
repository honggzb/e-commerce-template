import {
    LoginSocialGoogle,
    IResolveParams,
  } from 'reactjs-social-login';
  import {
    GoogleLoginButton,
  } from 'react-social-login-buttons';
import { useState, memo, useCallback } from 'react';
import './SocialLogin.scss';

interface Props {
    profile: any
    provider: string
    onLogout: () => void
}

const SocialUser = memo(({ provider, profile, onLogout }: Props) => {
    const avatar =
      profile?.avatar ||
      profile?.profile_image_url ||
      profile?.avatar_url ||
      profile?.picture ||
      profile?.picture?.data?.url ||
      profile?.profile_image_url_https ||
      'https://maxcdn.icons8.com/Share/icon/p1em/users//gender_neutral_user1600.png'
  
    return (
      <div className='card'>
        <div className='avt'>
          <img alt='141' src={avatar} />
        </div>
        <h3 className='provider'>{provider.toUpperCase()}</h3>
        <div className='content'>
          <div className='data'>
            {Object.entries(profile).map(([key, value]: any) => (
              <div className='field' key={key}>
                <div className='label'>{key}: </div>
                <div className='value'>{JSON.stringify(value)}</div>
              </div>
            ))}
          </div>
          <button className='btnLogout' onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    )
  })

const SocialLogin = () => {

    const [provider, setProvider] = useState('');
    const [profile, setProfile] = useState<any>();
    // const REDIRECT_URI =
    // 'https://plenty-planets-beam-42-118-51-2.loca.lt/account/login';
    const REDIRECT_URI = 'http://localhost:5173/signin'
    // const onLoginStart = useCallback(() => {
    //     alert('login start');
    //   }, []);
    const onLogoutSuccess = useCallback(() => {
        setProfile(null);
        setProvider('');
        alert('logout success');
      }, []);

    const onLogout = useCallback(() => {}, []);

    return (
        <>
            {provider && profile && (
                <SocialUser provider={provider} profile={profile} onLogout={onLogout} />
            )}
            <LoginSocialGoogle
                client_id={'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'}
                redirect_uri={REDIRECT_URI}
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                // onLoginStart={onLoginStart}
                onLogoutSuccess={onLogoutSuccess}
                onResolve={({ provider, data }: IResolveParams) => {
                    setProvider(provider);
                    setProfile(data);
                }}
                onReject={err => { console.log(err); }} >
            <GoogleLoginButton />
            </LoginSocialGoogle>
        </>
    )
}

export default SocialLogin;