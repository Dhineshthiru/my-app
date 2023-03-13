import { useContext } from "react";
import{AppContext} from "./App"
const DisplayName = ()=>{
    const{name} = useContext(AppContext);
    return(
        <>
            Name:{name};
        </>
    )
}
export default DisplayName