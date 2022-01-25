import React, { useState, useEffect } from 'react'
import { Table, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { selectTask, setDeletTask, selectTaskById } from '../features/tasks/taskSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';

function ViewTask() {
    const AllTask = useSelector(selectTask)
    const dispatch = useDispatch()
    const histroy = useHistory()
    const [Search, setSearch] = useState("")
    const [TaskData, setTaskData] = useState([])
    const [Filter, setFilter] = useState("")
    var d = new Date();
    var n = d.getHours();

    useEffect(() => {
        setTaskData(AllTask)
    }, [AllTask])
    const handelDelet = (id) => {
        dispatch(setDeletTask({
            id
        }))
    }
    const handelEdit = (data) => {

        dispatch(selectTaskById({
            data
        }))
        histroy.push("/EditTask")
    }
    const handelSearch = (e) => {
        setSearch(e.target.value)
    }
    const SearchData = () => {
        const index = AllTask.filter((item) => item.taskname.toLowerCase().includes(Search.toLowerCase()))
        setTaskData(index)
    }
    const HandelFilter = (e) => {
        setFilter(e.target.value)
        if (e.target.value === "running") {
            let filterData = AllTask.filter((task) =>
                parseInt(task.endTime) >= parseInt(n) && parseInt(task.startTime) <= parseInt(n))
            setTaskData(filterData)
        } else if (e.target.value === "scheduled") {
            let filterData = AllTask.filter((task) =>
                parseInt(task.endTime) > parseInt(n) && parseInt(task.startTime) > parseInt(n))
            setTaskData(filterData)
        } else if (e.target.value === "expired") {
            let filterData = AllTask.filter((task) =>
                parseInt(task.endTime) < parseInt(n) && parseInt(task.startTime) < parseInt(n))

            setTaskData(filterData)
        } else {
            setTaskData(AllTask)
        }

    }
    return (
        <Container>
            <Contant >
                <Wrap>
                    <LeftMenu>
                        <Link to="/CreateTask">Add Task</Link>
                    </LeftMenu>
                    <RightMenu>
                        <input type="text" placeholder="Search by task name" onChange={(e) => handelSearch(e)} />
                        <SearchButton><a onClick={SearchData}>Search</a></SearchButton>
                        <Form.Control as="select" name="Filter" value={Filter} onChange={HandelFilter}>
                            <option defaultValue value="">Select a filter</option>
                            <option value="scheduled">scheduled</option>
                            <option value="running">running</option>
                            <option value="expired">expired</option>
                            <option value="All">All Status</option>
                        </Form.Control>
                    </RightMenu>
                </Wrap>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Task Name</th>
                            <th>Discription</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {TaskData && TaskData.map((task, index) => (


                        <tbody key={index}>
                            <tr>
                                <td>{task.id}</td>
                                <td>{task.taskname}</td>
                                <td>{task.discription}</td>
                                <td>{parseInt(task.endTime) >= parseInt(n) && parseInt(task.startTime) <= parseInt(n) ? "running" : parseInt(task.endTime) > parseInt(n) && parseInt(task.startTime) > parseInt(n) ? "scheduled" : parseInt(task.endTime) < parseInt(n) && parseInt(task.startTime) < parseInt(n) ? "expired" : null}</td>
                                <td><button onClick={() => handelEdit(task)}>Edit</button>  <button onClick={() => handelDelet(task.id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
                {/* </Wrap> */}
            </Contant>
        </Container >
    )
}

export default ViewTask

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
      display: flex;
      justify-content:space-between;
      align-items:center;
      width:100%;
`
const LeftMenu = styled.div`
          width: 100px;
          display:flex;
          text-align:center;
          margin:12px;
       a{
            font-weight: 600;
            text-transform: uppercase;
            /* margin-right: 10px; */
            font-size:10px;
            text-decoration:none;
            color:white
        }
        border: 1px solid #f9f9f9;
        padding: 8px 6px;
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
const SearchButton = styled(LeftMenu)`
   
`
const RightMenu = styled.div`
     display:flex;
     input{
        margin:12px;
       font-size:15px;
       font-weight:600;
       width:90%;
       height:30px;
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
   
`