import React from "react";
import "./App.css"
import Header from "./component/header"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useState } from "react";
import Fields from "./component/fields";
import DeleteIcon from "./component/fields"

function App() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [data, setData] = useState([])

    const addData = () => {
        setData([...data, { name, email }]
        );
        setName("")
        setEmail("")
    }
    const removeItem = (index) => {
        let arr = data;
        arr.splice(index, 1);
        setData([...arr]);
    }
        



    return (
        <div className="App">


            <Header />
            <div className="form">
                <Stack spacing={2} direction="row">
                    <TextField
                        value={name} onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Name:" variant="outlined" />
                    <TextField value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="E-mail" variant="outlined" />
                    <Button onClick={addData} color="success" variant="contained"><AddIcon /></Button>
                
                </Stack>
            </div>
            <div className="data">
                <div className="data_val">
                    <h4>Name:</h4>
                    <h4>E-mail:</h4>
                    <h4>Remove</h4>
                </div>
                {
                    data.map((Element, index , currentId) => {
                        
                        
                        return (
                        

                            <div key={index} className="data_val">
                                <h4>{Element.name}</h4>
                                <h4>{Element.email}</h4>
                                <stack>
                                
                                    <Button onClick={() => removeItem(index)} color="error"><DeleteIcon /></Button>
                                </stack>
                            </div>
                        )
                    })
                }
            </div>
        </div>


    )
 }

    



export default App