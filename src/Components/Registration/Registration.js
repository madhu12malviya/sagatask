import React, { useState } from 'react'
import { TextField, Button,Typography } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import './Registration.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { regiter_user } from '../../Redux/Action/userAction'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";


const Registration = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [user, setUser] = useState([])
    const dispatch = useDispatch();
    // console.log(user)


    const onSubmit = (data) => {
        dispatch(regiter_user(data))
       
    }
    
    //     console.log("hshs")
    //     let val = (JSON.parse(localStorage.getItem("registerdata")))
    //     val?.map((newdata) => {
    //         if (newdata.email == data.email) {
    //             toast.error(`Email already exist`);
    //         } else {
    //             dispatch(regiter_user(data))
    //             navigate("/")
    //         }
    //     })
    // }

    return (
        <div className='inputDiv' >
            <h3>User Registration</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextField className="innerField" type="text" placeholder='Name' variant="outlined" name="name" {...register("name", { required: true })} />
                </div>

                {errors.name && <span>name is required</span>}

                <div>
                    <TextField className="innerField" type="email" placeholder="Email" variant="outlined" name="email" {...register('email', { required: true })} />
                </div>
                {errors.email && <span>email is required</span>}

                <div>
                    <TextField className="innerField" type="phone" placeholder="Phone" variant="outlined" name="phone" {...register("phone", { required: true })} />
                </div>
                {errors.phone && <span>phone number is required</span>}
                <div>
                    <TextField className="innerField" type="password" placeholder="Password" variant="outlined" name="password" {...register("password", { required: true })} />
                </div>
                {errors.password && <span>password is required</span>}
                <div>
                    <Button variant="contained" type="submit" >Register</Button>
                    {/* <Button variant="contained" onClick={onSubmit}>Register</Button> */}

                </div>

                <div>
               
                    <Typography s>
                        If Not login, Go <Link to="/">Login</Link> First
                    </Typography>


                </div>
            </form>

        </div>
    )
}

export default Registration