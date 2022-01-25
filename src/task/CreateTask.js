import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'
import moment from 'moment';
import { setCreateTask, setEditTask, setDeletTask, selectTaskId } from '../features/tasks/taskSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import TimePicker from 'react-time-picker';

function CreateTask(props) {


    const [Edit, setEdit] = useState(false)
    const [taskname, setTaskname] = useState("")
    const [discription, setDiscription] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const dispatch = useDispatch()
    const TaskData = useSelector(selectTaskId)
    const histroy = useHistory()

    useEffect(() => {
        if (props.Edit !== undefined) {
            setTaskname(TaskData.taskname)
            setDiscription(TaskData.discription)
            setStartTime(TaskData.startTime)
            setEndTime(TaskData.endTime)
            setEdit(true)
        } else {
            setEdit(false)
        }
    }, [props.Edit])

    const handleStartChange = date => {
        setStartTime(date)
    };
    const handleEndChange = date => {
        setEndTime(date)
    };
    const handelChnages = (e) => {
        if (e.target.name === "taskname") {
            setTaskname(e.target.value)
        } else {
            setDiscription(e.target.value)
        }
    }
    const handelCreateTask = () => {
        dispatch(setCreateTask({
            id: 7,
            taskname,
            discription,
            startTime,
            endTime
        }))
        histroy.push("/ViewTasks")
    }
    const handelEditTask = () => {
        dispatch(setEditTask({
            id: TaskData.id,
            taskname,
            discription,
            startTime,
            endTime
        }))
        histroy.push("/ViewTasks")
    }
    return (
        <Container>
            <Contant >
                <Wrap>
                    <MainHeading> {props.Edit ? "Edit Task" : "Create Task"}</MainHeading>
                    <SectionOne>

                        <p>Task Name :-</p>
                        <input name="taskname" type="text" value={taskname} onChange={(e) => handelChnages(e)} /><br />
                        <p>Discription :-</p>
                        <textarea name="discription" type="textarea" value={discription} onChange={(e) => handelChnages(e)} /><br />
                        <p>Start Time :-</p>
                        <TimePicker
                            onChange={handleStartChange}
                            value={startTime}
                        /><br />
                        <p>End Time :-</p>
                        <TimePicker
                            onChange={handleEndChange}
                            value={endTime}
                        />
                    </SectionOne>
                    <RightMenu>
                        {!props.Edit ? <a onClick={handelCreateTask}>Submit</a> : <a onClick={handelEditTask}>Update</a>}

                    </RightMenu>

                </Wrap>

            </Contant>



        </Container>
    )
}

export default CreateTask
const Container = styled.div`
text-align:center;
margin:8% 12px;
@media (max-width:768px){
    margin: 25% 6px;
}
`
const Contant = styled.div`
   display: grid;
   grid-gap: 25px;
   grid-template-columns: repeat(1, minmax(0,1fr));
  align-items:center;
 
`
const Wrap = styled.div`
    /* height: 300px ; */
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
     text-align:left;
   input,textarea{
       font-size:15px;
       font-weight:600;
       width:90%;
       height:30px;
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
   p{
    font-weight:600;
       font-size:15px;
   }
   textarea{
       font-size:15px;
       font-weight:600;
       width:90%;
       height:100px;
       margin:10px;
       border-radius: 35px;
       border-radius: 35px;
       padding:12px;
    border: 1px solid #000;
    outline: none;
    background-color: #fff8fb;
    text-decoration:none;
   }
   @media (max-width:768px){
    input{
       font-size:10px;
     
   }
   textarea{
    font-size:10px;
     height: 50px;
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