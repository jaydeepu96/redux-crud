import React, { useState } from 'react'

import { setUserLogin, setSignOut } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import styled from 'styled-components'


function Login() {
    // const login = useSelector(selectLogin)
    const [error, setError] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passErr, setPassErr] = useState("")
    const dispatch = useDispatch()
    const histroy = useHistory()
    const handelLogin = () => {
        console.log("login")
        if (username === "Vipinpandey" && password === "123456") {
            dispatch(setUserLogin({
                login: true,
            }))
            histroy.push("/ViewTasks")
        } else if (password.length <= 7) {
            setPassErr("***password length should be greater then 8 ***")
        } else {
            setPassErr("**wrong Username or Password**")
        }
    }
    const handelUsername = (e) => {
        // let UserVal =
        let CorrectWay = /^[A-Za-z]+$/;
        let whiteSpace = /\s/g
        if (e.target.value.match(CorrectWay)) {
            setUsername(e.target.value)
        } else if (e.target.value.match(whiteSpace)) {
            setError("**white space is not Allowed**")
        } else if (username.length === 1) {
            setUsername("")
            setError("")
        }

    }
    const handelPassword = (e) => {
        let CorrectWay = /^[a-zA-Z0-9\.]*$/
        let whiteSpace = /\s/g
        if (e.target.value.match(CorrectWay)) {
            setPassword(e.target.value)
            // setError("** username character length not less then 8**")
        } else if (e.target.value.match(whiteSpace)) {
            setPassErr("**white space is not Allowed**")
        } else {
            setPassErr("**only alphanumeric is Allowed**")
        }

    }
    return (
        <Container>
            <Contant >
                <Wrap>

                    <SectionOne>
                        <MainHeading> Login </MainHeading>
                        <input placeholder=" Enter user name" type="text" value={username} onChange={(event) => handelUsername(event)} /><br />
                        <span>{error}</span><br />
                        <input placeholder="Enter password" type="password" value={password} onChange={(event) => handelPassword(event)} /><br />
                        <span>{passErr}</span>
                    </SectionOne>
                    <RightMenu>

                        <a onClick={handelLogin}>Login</a>
                    </RightMenu>

                </Wrap>

            </Contant>


        </Container>
    )
}

export default Login

const Container = styled.div`
text-align:center;
margin:10% ;
`
const Contant = styled.div`
   display: grid;
   grid-gap: 25px;
   grid-template-columns: repeat(1, minmax(0,1fr));
  align-items:center;
 
`
const Wrap = styled.div`
    border-radius: 10px;
    border: 1px solid grey;
   box-sizing:border-box;
   padding:10px;
   width:50%;
   margin-left:auto;
  margin-right:auto;
  @media (max-width:768px){
    width:100%;
    margin-left:2px;
  margin-right:2px;
   }
`
const MainHeading = styled.h1`
  font-family: 'Bangers', cursive;
`
const SectionOne = styled.div`
   input{
       font-size:15px;
       font-weight:600;
       width:60%;
       height:40px;
       margin:12px;
       border-radius: 35px;
       border-radius: 35px;
    border: 1px solid #000;
    outline: none;
    background-color: #fff8fb;
    text-decoration:none;
   }
  
   input:focus {
    background-color: white;
    color: #000;
   }
   span{
       color:red;
       font-size:10px;
   }
   @media (max-width:768px){
    input{
       font-size:10px;
       width:90%;
     
   }
   span{
       font-size:12px;

   }
    }
`
const RightMenu = styled.div`
          width: 100px;
          display:flex;
          align-items:center;
          margin-left:auto;
          margin-right:auto;
          margin-top:12px;
       a{
            font-weight: 600;
            text-transform: uppercase;
            margin-right: 10px;
        }
        
        border: 1px solid #f9f9f9;
        padding: 8px 26px;
        border-radius: 4px;
        letter-spacing: 1.5px;
        text-transform:uppercase;
        cursor: pointer;
        background-color: #000000;
        color: #fff;
        border-color: transparent;
   @media (max-width:768px){
        padding: 6px 14px;
        font-size:10px;
   }
   `