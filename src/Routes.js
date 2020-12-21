import { Route, Switch } from "react-router"
import NavBar from './components/NavBar'
import ProductDetail from "./pages/ProductDetail"
import Home from "./pages/Home"
import Registro from "./pages/Registro"
import Login from "./pages/Login"
import NoMatch from "./pages/NoMatch"
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAZHMshpfUCeNoTqzTasx0FXg-28VbbRGw",
    authDomain: "truchimarket.firebaseapp.com",
    projectId: "truchimarket",
    storageBucket: "truchimarket.appspot.com",
    messagingSenderId: "714659951863",
    appId: "1:714659951863:web:9f893e4eb162cf4c1fcff2",
    measurementId: "G-WVH1B5KPRT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function Routes() {
    console.log(firebase.database)
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
