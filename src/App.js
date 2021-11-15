
import './App.css';
import React from "react";
import { Switch, Route,  Redirect } from "react-router-dom";

import {CardList} from "./CardList";
import {AddCar} from "./AddCar";
import {EditCar} from "./EditCar";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import data from './mock-data.json';
import { useState } from "react";
import {useParams} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

function App() {
  const history=useHistory();
  const [carlist,setCarlist]=useState(data);
  // const {id}=useParams();
  
  return (
    <div className="App">
      <div className="navbar">
       <Button startIcon={<DirectionsCarIcon/>} color="inherit" variant="text" onClick={()=>history.push("/car")}>
              carlist
        </Button>
        <Button startIcon={<AddIcon/>} color="inherit" variant="text" onClick={()=>history.push("/addcar")}>
              ADD CAR
        </Button>
        </div>
        
        <Switch>
        <Route exact path="/car/edit/:id" >
           <EditCar carlist={carlist} setCarlist={setCarlist}/>
          </Route>
          <Route path="/car"  >
           <CardList carlist={carlist} setCarlist={setCarlist}/>
          </Route>
          <Route path="/addcar" >
           <AddCar carlist={carlist} setCarlist={setCarlist}/>
          </Route>
          
        </Switch>

     
    </div>
  );
}

export default App;


// {
//   "company":"",
//   "pic":"",
//   "model":"",
//   "price":"",
//   "engine":"",
//   "seater":"",
//    "fueltank":"",
//   "dimension":"",
//   "fueleconomy":"",
// },