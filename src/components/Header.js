import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../Css/dashboard.css"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
const Header = () => {
    const navigate = useNavigate()
    const handleData = () => {
        localStorage.removeItem("data")

    }
    return (
        <AppBar>
            <Toolbar>
                <Box style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <Link style={{ color: "white" }} to="/jokes"><Typography style={{ cursor: "pointer" }} variant="h6" component="div" >
                        Jokes
                    </Typography>
                    </Link>
                    <Link style={{ color: "white" }} to="/login"><Typography onClick={handleData} variant="h6" component="div" >
                        Logout
                    </Typography>
                    </Link>

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header