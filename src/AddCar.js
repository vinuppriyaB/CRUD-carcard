import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";


export function AddCar({carlist,setCarlist}) {
    
    const [company, setCompany] = useState("");
    const [pic, setPic] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [engine, setEngine] = useState("");
    const [seater, setSeater] = useState("");
    const [fueltank, setFueltank] = useState("");
    const [dimension, setDimension] = useState("");
    const [fueleconomy, setFueleconomy] = useState("");
    const history = useHistory();
   
  
    const addcar = () => {
        console.log("before   "+carlist);
        setCarlist([...carlist,{ company,pic,model,price,engine,seater,fueltank,dimension,fueleconomy }]);
        console.log("after  "+carlist);
        
    };
  

    return (
      <div className="input_field" >
        <TextField
          className="input_text"
          id="name"
          name="name"
          label="Company Name"
          variant="outlined"
          value={company}
          
  
          onChange={(event) => setCompany(event.target.value)}
        />
        <TextField
          className="input_text"
          id="pic"
          name="pic"
          id="outlined-basic"
          label="Picure Link"
          variant="outlined"
          value={pic}
          
  
          onChange={(event) => setPic(event.target.value)}
        />
        <TextField
          className="input_text"
          id="summary"
          name="summary"
          id="outlined-basic"
          label="Model"
          variant="outlined"
          value={model}
          
          onChange={(event) => setModel(event.target.value)}
        />
        <TextField
          className="input_text"
          id="rating"
          name="rating"
          id="outlined-basic"
          label="Price"
          variant="outlined"
          value={price}
         
          onChange={(event) => setPrice(event.target.value)}
        />
        <TextField
          className="input_text"
          id="trailer"
          name="trailer"
          id="outlined-basic"
          label="Engine"
          variant="outlined"
          value={engine}
          onChange={(event) => setEngine(event.target.value)}
        />
        <TextField
          className="input_text"
          id="seater"
          name="seater"
          id="outlined-basic"
          label="Seater"
          variant="outlined"
          value={seater}
          onChange={(event) => setSeater(event.target.value)}
        />
        <TextField
          className="input_text"
          id="Fueltank"
          name="Fueltank"
          id="outlined-basic"
          label="Fuel Capacity"
          variant="outlined"
          value={fueltank}
          onChange={(event) => setFueltank(event.target.value)}
        />
        <TextField
          className="input_text"
          id="dimension"
          name="dimension"
          id="outlined-basic"
          label="Dimension"
          variant="outlined"
          value={dimension}
          onChange={(event) => setDimension(event.target.value)}
        />
        <TextField
          className="input_text"
          id="Fueleconomy"
          name="Fueleconomy"
          id="outlined-basic"
          label="Fuel Economy"
          variant="outlined"
          value={fueleconomy}
          onChange={(event) => setFueleconomy(event.target.value)}
        />
        <Button
        style={{backgroundColor:"#960736",color:"white"}}
        type="submit"
          variant="contained"
          onClick={() => {
            addcar();
            history.goBack();
          }}
        >
          Add car
        </Button>
     </div>
    );
  }