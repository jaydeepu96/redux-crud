import React from 'react'
import { setUserLogin, setSignOut, selectLogin } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function Topbar() {
    const login = useSelector(selectLogin)
    const dispatch = useDispatch()
    const handelLogout = () => {
        dispatch(setSignOut());
    }
    return (
        <>
            {
                login ?
                    <Container>
                        <Menu>

                            <Link to="/ViewTasks">Task</Link>
                            <Link to="/Jokes">jokes</Link>
                        </Menu>



                        <RightMenu>

                            <a onClick={handelLogout}>Logout</a>
                        </RightMenu>

                    </Container>

                    : null
            }

        </>
    )
}

export default Topbar

const Container = styled.div`
            min-height: 30px;
            position: fixed;
            display:flex;
            align-items:center;
            justify-content:space-around;
            padding:10px 20px;
            top:0;
            left:0;
            right:0;
            z-index:1;
            background:black;
            `
const Menu = styled.div`
            display:flex;
            align-items:center;
            justify-content:center;
            flex:1;
         

            a {
               font-weight: 600;
               text-transform: uppercase;
               padding: 0 20px;
              flex-wrap:nowrap;
              color:white;
          }
            `

const RightMenu = styled.div`
          display:flex;
          align-items:center;
       a{
            font-weight: 600;
            text-transform: uppercase;
            margin-right: 10px;
        }
        border: 1px solid #f9f9f9;
        padding: 8px 16px;
        border-radius: 4px;
        letter-spacing: 1.5px;
        text-transform:uppercase;
        cursor: pointer;
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
   @media (max-width:768px){
        padding: 2px 4px;
        font-size:10px;
      a{
         margin-right: 1px;
        }
   }
`

