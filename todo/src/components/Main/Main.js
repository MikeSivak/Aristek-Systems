import { Grid, TextField, Button, Typography, Checkbox, FormControlLabel, IconButton, ButtonGroup } from "@mui/material"
import { Box, minWidth } from "@mui/system"
import { chainPropTypes } from "@mui/utils";
import { useDebugValue, useEffect, useState } from "react"
import axios from 'axios'

export const Main = () => {

    const [newTask, setNewTask] = useState('');
    const [emptyError, setEmptyError] = useState('')
    const [toDoList, setToDoList] = useState([]);
    const [completedList, setCompletedList] = useState([]);
    const [editState, setEditState] = useState(false);
    const [editItem, setEditItem] = useState({});

    // entered text for create a new ToDo item
    const handleNewTaskOnChange = (event) => {
        setEmptyError('');
        setNewTask(event.target.value)
    }

    // delete item from ToDo list - DELETE
    const handleDeleteToDoItem = (id) => {
        console.log('Deleted Item ID: ' + id)
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res) => {
                //here can be call getToDoListByUserId() function for show updated data, but server don't save results
                console.log(res.data)
                setToDoList(toDoList.filter((toDo) => {
                    return toDo.id !== id
                }))
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    // delete item from completed ToDo list - DELETE
    const handleDeleteCompleted = (id) => {
        console.log('Deleted Completed ID: ' + id)
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res) => {
                //here can be call getCompletedListByUserId() function for show updated data, but server don't save results
                console.log(res.data)
                setCompletedList(completedList.filter((completedList) => {
                    return completedList.id !== id
                }))
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    // get ToDo list - GET
    const getToDoListByUserId = async () => {
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${1}&completed=false`)
            .then((res) => {
                setToDoList(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    // get completed ToDo list - GET
    const getCompletedListByUserId = async () => {
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${1}&completed=true`)
            .then((res) => {
                setCompletedList(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    // create a new ToDo - POST
    const createToDo = async () => {
        if (newTask) {
            setEmptyError('')
            setNewTask('')
            axios.post('https://jsonplaceholder.typicode.com/todos', {
                userId: 1,
                title: newTask,
                completed: false
            })
                .then((res) => {
                    setToDoList([...toDoList, res.data])
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }
        else {
            setEmptyError(<span style={{ color: 'red' }}>Fill in the field.</span>)
            console.log("Заполните поле!")
        }

    }

    // complete a ToDo
    const completeToDo = (id, title) => {
        console.log('completed ToDo id: ' + id + " | title: " + title)
        axios.put(`https://jsonplaceholder.typicode.com/todos/${1}`, {
            userId: 1,
            id: id,
            title: title,
            completed: true
        })
            .then((res) => {
                //here can be call getToDoListByUserId() and getCompletedListByUserId() functions for show updated data, but server don't save results
                console.log(res.data)
                // delete completed ToDo from ToDo list
                setToDoList(toDoList.filter((toDo) => {
                    return toDo.id !== id
                }))
                // add a completed ToDo to compated ToDo list
                setCompletedList([...completedList, res.data])
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    // edit an item of ToDo list
    const selectToDo = (id, title) => {
        console.log('For Update -> ID: ' + id + " | TITLE: " + title)
        setNewTask(title);
        setEditState(true);
        setEditItem({ userId: 1, id: id, title: title, completed: false });
    }

    const saveToDo = () => {
        if (newTask) {
            setEmptyError('')
            setNewTask('')
            setEditState(false)

            axios.put(`https://jsonplaceholder.typicode.com/todos/${editItem.id}`, {
                userId: 1,
                id: 1,
                title: newTask,
                completed: false
            })
                .then((res) => {
                    //here can be call getToDoListByUserId() function for show ToDo list with updated item, but server don't save results
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err.message)
                })

            // temporary array of ToDo list objects for update selected ToDo item
            const tempToDoList = [...toDoList];

            // search an object which equal with selected by ToDo id
            for (let i in tempToDoList) {
                if (tempToDoList[i].id == editItem.id) {
                    // set a new value for selected ToDo item for update
                    tempToDoList[i] = { userId: 1, id: editItem.id, title: newTask, completed: false }
                }
            }

            // reset a toDoList with updated ToDo item
            setToDoList(tempToDoList);
        }
        else {
            setEmptyError(<span style={{ color: 'red' }}>Fill in the field.</span>)
            console.log('Заполните поле!')
        }

    }

    useEffect(() => {
        getToDoListByUserId()
        getCompletedListByUserId()
    }, [])

    return (
        <>
            <Box style={{ width: '52px', height: '100%', position: 'fixed', backgroundColor: '#550DC9', float: 'left' }}>
                <img src="./Tasks.svg" alt="icon" style={{ marginTop: '24px', height: '32px' }} />
            </Box>
            <Box style={{ paddingBottom: '4em' }}>
                <Box style={{ marginLeft: '76px' }}>
                    <Grid container xs={12} columnSpacing={8} rowSpacing={4} >
                        <Grid item xs md={8}>
                            <Box style={{ minWidth: '300px' }}>
                                <Grid container xs={12}>
                                    <Grid item xs>
                                        <TextField
                                            fullWidth
                                            helperText={emptyError}
                                            size="small"
                                            placeholder="+ Add a task, press Add to save *"
                                            value={newTask}
                                            onChange={handleNewTaskOnChange}
                                        ></TextField>
                                        <Typography style={{ float: 'left', backgroundColor: '#FEF6FF', minWidth: '50px', maxWidth: '100px', fontSize: '12px', marginTop: '12px' }}>Total: {toDoList.length + completedList.length}</Typography>
                                    </Grid>
                                    <Grid item ml={2}>
                                        {
                                            !editState
                                                ? <Button
                                                    variant="contained"
                                                    style={{
                                                        textTransform: 'none',
                                                        fontSize: '16px',
                                                        backgroundColor: '#550DC9'
                                                    }}
                                                    onClick={() => createToDo()}
                                                >
                                                    Add</Button>
                                                : <Button
                                                    variant="contained"
                                                    style={{
                                                        textTransform: 'none',
                                                        fontSize: '16px',
                                                        backgroundColor: '#550DC9'
                                                    }}
                                                    onClick={() => saveToDo()}
                                                >
                                                    Save</Button>
                                        }

                                    </Grid>
                                </Grid>
                            </Box>
                            <Box style={{ marginTop: '16px', minWidth: '300px' }}>
                                <Typography style={{ textAlign: 'left', fontSize: '16px', fontWeight: '600' }}>To do ({toDoList.length})</Typography>
                                {toDoList.map((toDo) => (
                                    <Box style={{ marginTop: '16px', minWidth: '300px' }}>
                                        <Box style={{ height: 'auto', padding: '6px 12px', textAlign: 'left', boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.08)' }}>
                                            <FormControlLabel
                                                sx={{ width: '65%' }}
                                                control={
                                                    <Checkbox
                                                        checked={false}
                                                        size="small"
                                                        sx={{ '&.Mui-checked': { color: '#550DC9', }, color: '#ECECEC' }}
                                                        onChange={() => completeToDo(toDo.id, toDo.title)}
                                                    />
                                                }
                                                label={toDo.title}
                                                style={{ wordWrap: 'normal' }}
                                            />
                                            <ButtonGroup style={{ float: 'right' }}>
                                                <IconButton onClick={() => selectToDo(toDo.id, toDo.title)}>
                                                    <img src="./edit.png" />
                                                </IconButton>
                                                <IconButton onClick={() => handleDeleteToDoItem(toDo.id)}>
                                                    <img src="./delete.png" />
                                                </IconButton>
                                            </ButtonGroup>
                                        </Box>
                                        {/* </Box> */}
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs md={4}>
                            <Box>
                                <Typography style={{ textAlign: 'left', fontSize: '16px', fontWeight: '600' }}>Completed ({completedList.length})</Typography>
                                {completedList.map((completed) => (
                                    <Box style={{ marginTop: '16px', minWidth: '300px' }}>
                                        <Box style={{ height: 'auto', textAlign: 'left', padding: '6px 12px', boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.08)' }}>
                                            <FormControlLabel
                                                sx={{ width: '80%'}}
                                                control={
                                                    <Checkbox
                                                        size="small"
                                                        sx={{ '&.Mui-checked': { color: '#550DC9', }, color: '#ECECEC' }}
                                                        defaultChecked
                                                        disabled
                                                    />
                                                }
                                                label={completed.title}
                                                style={{ textDecoration: 'line-through', color: '#A3A3A3', wordWrap: 'normal' }}
                                            />
                                            <IconButton style={{ float: 'right' }}>
                                                <img
                                                    src="./delete.png"
                                                    onClick={() => handleDeleteCompleted(completed.id)}
                                                />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}