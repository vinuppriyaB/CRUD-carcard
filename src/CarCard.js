import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom";
import { EditCar } from "./EditCar";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { fabClasses } from "@mui/material";

export function CarCard({id,company,pic,model,price,engine,seater,fueltank,dimension,fueleconomy,carlist,setCarlist}){
    const history= useHistory();
    const [show,setShow]=useState(false);
    return(
        <div className="card">
            <div className="car-pic">
                <img className="pic" src={pic} />
            </div>
            <div className="car-detail">
                <div className="name">
                    
                        <div>{company }  </div>
                        <div>{model }</div>
                        <div><IconButton
                onClick={() => 
                    {
                        setShow(!show);
                        console.log(show);
                    }
                    }
                color="primary"
                aria-label={show ? "Hide" : "Show"}
                component="span"
              > 
                {show ? (
                  <ExpandLessIcon className="hide_show_btn" />
                ) : (
                  <ExpandMoreIcon className="hide_show_btn" />
                )}
              </IconButton></div>
                    
                </div>
                <div className="price">
                    <p>{price}</p>

                </div>
                {show? <div className="car-data">
                        <p><span className="bold">Engine:</span> {engine}</p>
                        <p><span className="bold">Seater:</span> {seater}</p>
                        <p><span className="bold">Fuel Tank:</span> {fueltank}</p>
                        <p><span className="bold">Dimention:</span> {dimension}</p>
                        <p><span className="bold">Fuel Economy:</span> {fueleconomy}</p>

                    </div>:""}

                    </div>
            
            
            <IconButton
            onClick={() => {
              
                console.log(id);
              
              history.push("/car/edit/" + id);
            }}
            style={{ marginLeft: "auto" }}
            aria-label="delete"
            color="primary"
            size="large"
          >
            <EditIcon />
          </IconButton>

          <IconButton
            onClick={() => {
                let currentlist = carlist.filter((mv, index) => index !== id);
              setCarlist(currentlist);

             }}
             style={{ marginLeft: "auto" }}
            aria-label="delete"
            color="error"
            size="large"
          >
            <DeleteIcon />
          </IconButton>
         
             
          </div>    
        
    )

}