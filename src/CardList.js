import {CarCard} from "./CarCard.js";
import data from './mock-data.json';

export function CardList({carlist,setCarlist}){
    console.log("carlist "+carlist);
    return(
        <div className="list-page">
            {carlist.map((car,index)=>(
            <CarCard 
            company={car.company}
            pic={car.pic}
            model={car.model}
            price={car.price}
            id={index}
            engine={car.engine}
            seater={car.seater}
            fueltank={car.fueltank}
            dimension={car.dimension}
            fueleconomy={car.fueleconomy}
            carlist={carlist}
            setCarlist={setCarlist}
            />))}
            
        </div>
    )
}
