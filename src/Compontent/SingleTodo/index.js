import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ModeEditOutlineSharpIcon from '@mui/icons-material/ModeEditOutlineSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import ToDoList from '../ToDoList'
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context';
import { Context2 } from '../../Context2';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';


export default function Index({ id, body }) {

    let getIte = localStorage.getItem("todo")
    let getItem = JSON.parse(getIte)

    const style = {

        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    let contdo = useContext(Context)
    let contdo2 = useContext(Context2)



    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    function editItem(id) {
        let newArray = contdo.Todo.filter((item) => {
            if (item.key != id) {
                return item
            }
            else {
                item.body = edit
                return item

            }

        })
        localStorage.setItem("todo", JSON.stringify(newArray))


        contdo.setTodo(newArray)
        console.log(newArray)




    }

    function deleteItem(id) {

        let newArray = contdo.Todo.filter((item) => {
            if (item.key != id)
                return item
        })

        console.log()



        localStorage.setItem("todo", JSON.stringify(newArray))


        contdo.setTodo(newArray)
        console.log(newArray)

    }
    let [edit, setEdit] = useState(iddd())

    //console.log(getItem[0])

    function iddd() {
        let val
        getItem.filter((item) => {
            if (item.key == id)
                val = item.body

        })
        return val

    }
    const Android12Switch = styled(Switch)(({ theme }) => ({
        padding: 8,
        '& .MuiSwitch-track': {
            borderRadius: 22 / 2,
            '&:before, &:after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 16,
                height: 16,
            },
            '&:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                    theme.palette.getContrastText(theme.palette.secondary.main),
                )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
                left: 12,
            },
            '&:after': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                    theme.palette.getContrastText(theme.palette.secondary.main),
                )}" d="M19,13H5V11H19V13Z" /></svg>')`,
                right: 12,
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: 'none',
            width: 16,
            height: 16,
            margin: 2,
        },
    }));

    function cheack(id) {
        console.log(getItem[1])

        let newArray = getItem.filter((item) => {
            if (item.key != id) {
                return item
            }
            else {
                if (item.completed === true) {


                    item.completed = false
                    contdo2.setCompleted(false)
                }
                else {

                    item.completed = true
                    contdo2.setCompleted(true)


                }

                console.log(item.completed)
                return item

            }

        })


        localStorage.setItem("todo", JSON.stringify(newArray))

        contdo.setTodo(newArray)
        const selectedItem = newArray.find((item) => item.key === id);
        if (selectedItem) {
            contdo2.setCompleted(selectedItem.completed);
        }


    }

    return (


        <Card sx={{ minWidth: 275, mb: 3 }} style={{ color: green }}>

            <CardContent style={{ backgroundColor: "#1976d2", color: "white" }}>
                <Stack direction={{ xs: 'column', sm: 'row' }}
                    spacing={3} >
                    <Typography sx={{ fontSize: 20 }} color="text.Primary" gutterBottom>
                        {body}
                    </Typography>
                    <div style={{ float: 'left', right: 0, top: 0, cursor: 'pointer' }}>
                        <FormControlLabel
                            control={<Android12Switch checked={contdo2.completed} onClick={() => {

                                cheack(id)
                            }} />}

                        />
                        <Button onClick={handleOpen} style={{ color: "white" }}><ModeEditOutlineSharpIcon /> </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" value={edit} onChange={(event) => {
                                    setEdit(event.target.value)



                                }} />
                                <Button variant="contained" sx={{ mb: 3, ml: 2 }} style={{ backgroundColor: "green", lineHeight: 3 }}
                                    onClick={() => {
                                        editItem(id)
                                    }}>Edit</Button>

                            </Box>
                        </Modal>
                        <IconButton aria-label="delete" onClick={() => {
                            deleteItem(id)
                        }}>
                            <DeleteIcon />
                        </IconButton>
                    </div>


                </Stack>

            </CardContent>

        </Card >


    )
}
