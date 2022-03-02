import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import axios from "axios"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../Css/dashboard.css"
import ClipLoader from "react-spinners/ClipLoader";
import Header from './Header';
import { Skeleton } from '@mui/material';

const Jokes = () => {
    const [joke, setJoke] = useState([]);
    const [loading, setLoading] = useState(false)

    const getJokes = async () => {
        const data = await axios.get("https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10")
        setJoke(data.data.jokes)
       
    }
    useEffect(() => {
        getJokes()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])
  
    return (
        <>
            <Header />
            <div style={{ margin: "80px 25px", gridGap: "50px", display: "grid", gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )" }}>
             {joke &&
                    joke.map((data, index) => (

                        
                            !loading ?
                            <Card sx={{ width: 275, height: "100%" }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    #{data.id}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {data.category}
                                </Typography>
                                <Typography className="joke-text" sx={{ mb: 1.5, fontFamily: "Roblox" }} color="text.secondary">
                                    {data.joke}
                                </Typography>

                            </CardContent>

                        </Card> :<><Skeleton variant="rectangular" width={275} height={250} /></>
                        
                        
                    )) 
               }
            </div>
        </>
    )
}

export default Jokes