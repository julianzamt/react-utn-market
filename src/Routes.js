import { Route, Switch } from "react-router"
import NavBar from './components/NavBar'
import ProductDetail from "./pages/ProductDetail"
import Home from "./pages/Home"
import Registro from "./pages/Registro"
import Login from "./pages/Login"
import NoMatch from "./pages/NoMatch"

function Routes() {
    return (
    <div>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/registro' component={Registro} />
            <Route exact path='/login' component={Login} />
            <Route path='/:number' component={ProductDetail} />
            <Route component={NoMatch} />
        </Switch>
    </div>
    )
}

export default Routes
