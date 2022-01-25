import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
function Jokes() {

    const [jokesData, setJokesData] = useState([])
    const [loading, setLoading] = useState(true)

    const colors = ["red", "yellow", "blue", "green", "purple", "pink"]
    const color = colors[Math.floor(Math.random() * colors.length)];
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`
    useEffect(() => {
        axios({
            url: `https://official-joke-api.appspot.com/jokes/ten`,
            method: "GET",
        })
            .then((response) => {
                setLoading(false)
                setJokesData(response.data)
            })
            .catch((err) => {
                console.log(err)

            })
    }, [])
    return (
        <Container>
            {loading ? <Loader>
                <ClipLoader color={color} loading={loading} css={override} size={150} />

            </Loader> :
                <>
                    <MainHeading>jokes</MainHeading>
                    <Contant >
                        {jokesData.map((item) => (

                            <Wrap key={item.id} colors={colors}>
                                <SectionOne colors={colors}>
                                    <h1>😆😄😸</h1>
                                </SectionOne>
                                <SectionTwo>
                                    <h4>{item.type}</h4>
                                    <p>{item.setup}</p>
                                    <p>'{item.punchline}'</p>

                                </SectionTwo>
                            </Wrap>
                        ))}
                    </Contant>
                </>

            }



        </Container>
    )
}

export default Jokes

const Container = styled.div`
text-align:center;
font-family: 'Bangers', cursive;
margin-top:8%;
padding: 0px 12px;
@media (max-width:768px){
    margin-top:20%;
    } 
`
const Loader = styled.div`
  margin-top:15%;
  @media (max-width:768px){
    margin-top:50%;
    } 
`
const MainHeading = styled.h1`
  /* font-size:30px;
  font-weight:500; */
`
const Contant = styled.div`
   display: grid;
   grid-gap: 25px;
   grid-template-columns: repeat(3, minmax(0,1fr));
   @media (max-width:768px){
    grid-template-columns: repeat(1, minmax(0,12fr));
   }
`
const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid grey;
   height:250px; ;
   background: ${props => props.colors[Math.floor(Math.random() * props.colors.length)]};
   box-sizing:border-box;
`
const SectionOne = styled.div`
border-radius: 10px 10px 0px 0px ;
padding:50% auto;
margin:0;
   /* text-align:center; */
   height: 30%;
   width:100%;
   h4{
       font-size:15px;
       font-weight:600;
   }
   @media (max-width:768px){
    h4{
       font-size:10px;
     
   }
    }
`

const SectionTwo = styled.div`
border-radius: 0px 0px 10px 10px ;
    height:60%;
   width:100%;
   font-size:13px;
   text-align:center;
  background:white;
  padding-top:4px;
  letter-spacing:1px;
   @media (max-width:768px){
    font-size:11px;
}
`
