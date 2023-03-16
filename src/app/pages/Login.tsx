import axios from 'axios';
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import styled from "styled-components";
import tw from "twin.macro";

import { login } from '../httpService/api/memberApi';
import Button from '../ui/atoms/Button';
import Title from '../ui/atoms/Title';
import Layout from '../ui/organisms/Layout'



export const Login = () => {
    const navigate = useNavigate();
    // to set focus on the user input when component loads
    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLParagraphElement>(null);

    const [memberEmail, setMemberEmail] = useState('');
    const [memberPassword, setMemberPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        if (userRef.current) {
            userRef.current.focus();
        }
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [memberEmail, memberPassword])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await login({ memberEmail, memberPassword })
            if (res.data.code === 1) {
                localStorage.setItem('YumeCamp_member', JSON.stringify(res.data.data.memberId))
                //navigate("/member/bookings")
                window.location.href = '/member/bookings';

                setMemberEmail("")
                setMemberPassword("")
            } else {
                setErrMsg(res.data.msg)
            }

        } catch (error: any) {
            setErrMsg(error.message)
        }
    }

    return (
        <Layout>
            <Formlayout>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <Title title={"Log in"} size='large' className="text-center" />
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMemberEmail(e.target.value)}
                        value={memberEmail}
                        placeholder="Email account"
                        required
                    />

                    <Input
                        type="password"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMemberPassword(e.target.value)}
                        value={memberPassword}
                        placeholder="Enter your password"
                        required
                    />
                    <Button theme="base" text="Log in" className="bg-primary hover:bg-transparent hover:text-primary hover:border-primary" />
                </Form>
                <hr />
                <p>
                    Need an Account? {' '}
                    <a href="/signup"><strong className='text-secondary'>Sign Up</strong></a>
                </p>
            </Formlayout>
        </Layout>
    )
}


const Formlayout = styled.div`
    ${tw`
    w-full
    max-w-[420px]
    min-h-[400px]
    flex
    flex-col
    justify-start
    p-5
    border-solid
    border
    border-gray-300
    rounded-[3px]
    m-20
    `}
`;
const Form = styled.form`
    ${tw`
    flex
    flex-col
    justify-evenly
    grow
    pb-4
    `}
`;
const Input = styled.input`
    ${tw`
    bg-emerald-50 
    border-solid
    border
    border-gray-200
    `}
`;