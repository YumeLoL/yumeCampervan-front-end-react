import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SubmitFormEvent } from '../../../typings/types';

import Title from '../../ui/atoms/Title'
import Button from '../../ui/atoms/Button';


const LoginPage = () => {
  // const { setAuth } = useAuth()!

  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  // to set focus on the user input when component loads
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e: SubmitFormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/users',
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      // setAuth({ user, pwd, roles, accessToken });
      setUser('');
      setPwd('');

      // navigate(from, { replace: true });
      navigate('/');
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current?.focus();
    }
  }

  return (
    <Container>
      <FormLayout>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <Title title={'Sign in'} size={'large'} />
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            placeholder="Username"
            required
          />

          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            placeholder="Enter your password"
            required
          />
          <Button theme="filled" text="Login"/>
        </Form>
        <p>
          Need an Account?<br />
          <span className="line">
            {/*put router link here*/}
            <a href="#">Sign Up</a>
          </span>
        </p>
      </FormLayout>
    </Container>
  )
}

export default LoginPage


const Container = styled.section`
  ${tw`
  w-screen h-screen
  flex
  justify-center items-center

  `}
`
const FormLayout = styled.div`
  ${tw`
  max-w-[420px] min-h-[400px]
  flex flex-col
  justify-start 
  p-4

  `}
`
const Form = styled.form`
  ${tw`
  flex flex-col 
  justify-evenly 
  pb-4
  `}
`