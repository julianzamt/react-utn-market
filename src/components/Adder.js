
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import React, { useContext } from "react"
import AppContext from "../context/AppContext"

const Adder = (props) => {
    const context = useContext(AppContext)

    const handleClick = (sign) => () => {
        if (sign === "plus") {
            context.addToCart(props.producto)
        }
        else {
            if (props.cantidad > 1){
                context.removeOneFromCart(props.producto)
            }
        }
    }

    return(
        <div>
            <IconButton onClick={handleClick("minus")}>
                <RemoveCircleOutlineIcon />
            </IconButton>
                {props.cantidad}
            <IconButton onClick={handleClick("plus")}>
                <AddCircleOutlineIcon />
            </IconButton>
        </div>
    )
}

export default Adder