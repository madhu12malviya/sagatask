import React, { useState } from 'react'
import { TextField, Button, Grid,Typography } from '@material-ui/core'
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import './Login.css'
import { login_user } from '../../Redux/Action/userAction'
import { jsx } from '@emotion/react'
import { toast } from "react-toastify";
import { Link } from 'react-router-dom'
// import { Link } from '@material-ui/core'

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()



    const onSubmit = (data) => {
        dispatch(login_user(data))
        let token = (JSON.parse(localStorage.getItem("tokenData")))
        if (token) {
            navigate('./dashboard')
            toast.success(`User Login Successfully!`);
        }else{
            toast.error(`Invalid Email or password!`);
        }
    }

    

    return (
        <div className='inputDiv'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item xs={12}>
                    <TextField type="email" placeholder="Email" {...register("email", { required: true })} variant="outlined" />
                </Grid>
                {errors.email && <span>Email is required</span>}

                <Grid item xs={12}>
                    <TextField type="password" placeholder="Password" {...register("password", { required: true })} variant="outlined" />
                </Grid>
                {errors.password && <span>Password is required</span>}


                <Grid item xs={12}>
                    <Button className='loginButton' type="submit" variant="contained">Login</Button>
                </Grid>

                <Grid item xs={12}>
                    <Typography s>
                        If Not Register, Go <Link to="/register">Register</Link> First
                    </Typography>

                </Grid>











            </form>
        </div>
    )
}

export default Login