import { Route, Switch, BrowserRouter } from "react-router-dom";

import LoginPage from "./components/LoginPage";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;