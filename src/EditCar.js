import {useParams} from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function EditCar({carlist,setCarlist}){
    const {id}=useParams();
    const history = useHistory();

   const car=carlist[id]
   console.log(car);
    const [company, setCompany] = useState(car.company);
    const [pic, setPic] = useState(car.pic);
    const [model, setModel] = useState(car.model);
    const [price, setPrice] = useState(car.price);
    const [engine, setEngine] = useState(car.engine);
    const [seater, setSeater] = useState(car.seater);
    const [fueltank, setFueltank] = useState(car.fueltank);
    const [dimension, setDimension] = useState(car.dimension);
    const [fueleconomy, setFueleconomy] = useState(car.fueleconomy);
    
   
  
    const editcar = () => {
        
       const editedDetail = { company,pic,model,price,engine,seater,fueltank,dimension,fueleconomy };
       carlist[id]= editedDetail;
       setCarlist(carlist);
        
    };
  

    return (
      <div className="input_field" >
        <TextField
          className="input_text"
          id="Company"
          name="Company"
          label="Company"
          variant="outlined"
          value={company}
          
  
          onChange={(event) => setCompany(event.target.value)}
        />
        <TextField
          className="input_text"
          id="pic"
          name="pic"
          id="outlined-basic"
          label="Picture link"
          variant="outlined"
          value={pic}
          
  
          onChange={(event) => setPic(event.target.value)}
        />
        <TextField
          className="input_text"
          id="model"
          name="model"
          id="outlined-basic"
          label="Model"
          variant="outlined"
          value={model}
          
          onChange={(event) => setModel(event.target.value)}
        />
        <TextField
          className="input_text"
          id="price"
          name="price"
          id="outlined-basic"
          label="Price"
          variant="outlined"
          value={price}
         
          onChange={(event) => setPrice(event.target.value)}
        />
        <TextField
          className="input_text"
          id="engine"
          name="engine"
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
            editcar();
            history.goBack();
          }}
        >
         save
        </Button>
     </div>


    )
}