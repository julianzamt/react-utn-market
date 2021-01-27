import { CSSTransition } from "react-transition-group"

const EmptyCart = (props) => {

    return (
        <CSSTransition
            in={props.visible}
            timeout={500}
            classNames="empty-cart"
        >
            <div className="empty-cart">El carrito se encuentra vacío</div>
        </CSSTransition>
    )
}

export default EmptyCart


