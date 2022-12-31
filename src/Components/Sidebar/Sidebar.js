import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import FaceIcon from '@material-ui/icons/Face';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText><Link style={{textDecoration:'none'}} to="/dashboard/userlist"> <span style={{color:"black"}}> Dashboard</span></Link></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AppsIcon />
                    </ListItemIcon>
                    <ListItemText><Link style={{textDecoration:'none'}} to="/dashboard"> <span style={{color:"black"}}>Create</span></Link></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                   <Link style={{textDecoration:'none'}} to="/dashboard"> <span style={{color:"black"}}>User List</span> </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <FaceIcon />
                    </ListItemIcon>
                    <ListItemText><Link style={{textDecoration:'none'}} to="/dashboard"> <span style={{color:"black"}}>User Profile</span> </Link></ListItemText>
                </ListItem>
            </List>
        </div>
    )
}

export default Sidebar
