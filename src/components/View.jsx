import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'

const View = () => {
    var[update,setupdate]=useState(false) 
    var[selected,setselected]=useState([])
    var[students,setstudents]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3006/Products")
        .then (response=>{
            setstudents(students=response.data)
            console.log(students)})
            .catch(error=>console.log(error))
    },[])
    const deleteValue=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3006/Products"+id)
        .then(response=>{
            alert("deleted")
            window.location.reload(false)

        })
    }
    const updateValue=(value)=>{
        setselected(value)
        setupdate(true)
    }
    var finalJSK =<TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <br></br> <br></br> <br></br> <br></br>
                    <TableCell>Name </TableCell>
                    <TableCell>Brand </TableCell>
                    <TableCell>Quantity </TableCell>
                    <TableCell>Price </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((value,index)=>{
                    return<TableRow>
                        <TableCell>{value.Name}</TableCell>
                        <TableCell>{value.Brand}</TableCell>
                        <TableCell>{value.Quantity}</TableCell>
                        <TableCell>{value.Price}</TableCell>
                        <TableCell><button onClick={()=>deleteValue(value.id)}>delete</button></TableCell>
                        <TableCell><button onClick={()=>updateValue(value)}>update</button></TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
    if(update)
    finalJSK=<Add data={selected} method="put"/>
        

  return (
   finalJSK
  )
}

export default View
