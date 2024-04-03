
import Button from "./Button";
import { Link } from "react-router-dom";

function MainScreen(){
    return (
        <div>
           <Link to="/data"><Button text="Create a CV"/></Link> 
        </div>
    )
}

export default MainScreen;