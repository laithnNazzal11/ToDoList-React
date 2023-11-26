import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SingleTodo from '../SingleTodo'
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { Context } from '../../Context';
import { Context2 } from '../../Context2';

import { useContext } from 'react';


export default function Index() {
    let [completed, setCompleted] = useState(true)
    const Cont = useContext(Context)
    const Cont2 = useContext(Context2)
    useEffect(() => {
        const storedItem = localStorage.getItem('todo'); // Replace 'yourKey' with the actual key you used when storing the item

        if (storedItem) {

            const parsedItem = JSON.parse(storedItem);
            setI(i + 1)
            setTodo(parsedItem)

        }
    }, []);

    const [body, setBody] = useState(".")
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    let [Todo, setTodo] = useState([

    ])

    let ai = localStorage.getItem("todo")

    function Show() {




        let Poost = Todo.map((item) => (

            <SingleTodo key={item.key} id={item.key} sx={{ mb: 3 }} body={item.body} />

        ))

        return Poost

    }


    function Showyes() {


        let post = Todo.filter((item) => {
            if (item.completed == true) {
                return item
            }

        })


        let Poost = post.map((item) => (

            <SingleTodo key={item.key} id={item.key} sx={{ mb: 3 }} body={item.body} />

        ))

        return Poost

    }


    function Showno() {


        let post = Todo.filter((item) => {
            if (item.completed == false) {
                return item
            }

        })


        let Poost = post.map((item) => (

            <SingleTodo key={item.key} id={item.key} sx={{ mb: 3 }} body={item.body} />

        ))

        return Poost

    }
    let [i, setI] = useState(Number(localStorage.getItem('counter')))

    function handelAdd() {
        let newArray = Todo.map((item) => {
            return item
        })

        newArray.push({
            key: `${i}`, completed: completed, body
        })

        localStorage.setItem("todo", JSON.stringify(newArray))
        console.log(i)
        const parsedItem = localStorage.getItem(("todo"));
        console.log(parsedItem)
        setI(prevI => prevI + 1)

        localStorage.setItem("counter", i)
        setTodo(newArray)
        console.log(newArray)

    }

    function Choos() {


        if (numb === 1) {
            return <Show />
        }
        else if (numb === 2) {
            return <Showyes />
        }

        else if (numb === 3) {
            return <Showno />
        }


    }
    let [numb, setNumber] = useState(3)

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Card sx={{ minWidth: 275 }} >
                    <CardContent>

                        <Typography variant="h2" component="div" gutterBottom>
                            My tasks
                        </Typography>
                        <Button variant="contained" sx={{ mb: 3, mr: 2 }} onClick={() => {

                            Choos(setNumber(1))
                        }} >All</Button>
                        <Button variant="contained" sx={{ mb: 3, mr: 2 }} onClick={() => {
                            Choos(setNumber(2))
                        }}>Completed</Button>
                        <Button variant="contained" sx={{ mb: 3 }} onClick={() => {
                            Choos(setNumber(3))
                        }}>not Completed</Button>

                        <Context.Provider value={{ Todo, setTodo }}>
                            <Context2.Provider value={{ completed, setCompleted }}>
                                <Choos />
                            </Context2.Provider>
                        </Context.Provider>

                        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={body} onChange={(event) => {
                            setBody(event.target.value)
                        }} />
                        <Button variant="contained" sx={{ mb: 3, ml: 2 }} style={{ backgroundColor: "green", minWidth: 280, lineHeight: 3 }} onClick={handelAdd} >Add</Button>





                    </CardContent>

                </Card>
            </Container>
        </React.Fragment>)
}
