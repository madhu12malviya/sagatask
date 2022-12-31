import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import './Dashboard.css'
import { Toolbar,Link,Typography,Button,Grid,List } from '@material-ui/core'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  const logout =()=>{
    window.location='/'
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div>
            <Link underline='none' color="inherit"> Dashboard</Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button style={{ position: "absolute", marginLeft: "100px", marginTop: "-26px" }} onClick={logout} color="inherit">Logout</Button>
            </Typography>
          </div>
        </Toolbar>   
      </AppBar>  
      <Sidebar/>
      

      {/* <Grid>
        <Outlet/>
      </Grid> */}

    </div>
  )
}

export default Dashboard