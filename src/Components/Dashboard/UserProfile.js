// import React, { useEffect } from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { useDispatch, useSelector } from 'react-redux';
// import { userProfile } from './Redux/Action/action';

// const UserProfile = () => {
//     const dispatch = useDispatch()
//     const user = useSelector((state) => state?.Reducer?.user)

//     useEffect(() => {
//         dispatch(userProfile())
//     }, [])
    
//     return (
//         <div>
//             <TableContainer component={Paper}>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Name</TableCell>
//                             <TableCell>email</TableCell>
//                             <TableCell>password</TableCell>
//                             <TableCell>Mobile</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     {user?.map((data) => {
//                         return (
//                             <TableBody>
//                                 <TableCell >{data.name}</TableCell>
//                                 <TableCell >{data.email}</TableCell>
//                                 <TableCell >{data.password}</TableCell>
//                                 <TableCell >{data.phone}</TableCell>
//                             </TableBody>
//                         )
//                     })}
//                 </Table>
//             </TableContainer>
//         </div>
//     )
// }

// export default UserProfile
