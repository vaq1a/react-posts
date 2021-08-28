import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoute, publicRoute} from "../router";
import {useAuthContext} from "../context/auth";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {auth, loading} = useAuthContext();

    if(loading) {
        return <Loader />
    }

    return (
        <Switch>
            {
                auth.value ? (
                    <>
                        {
                            privateRoute.map(({path, Component, exact}) => (
                                <Route exact={exact}
                                       key={path}
                                       path={path}>
                                    <Component />
                                </Route>
                            ))
                        }
                        <Redirect to="/posts" />
                    </>
                ) : (
                    <>
                        {
                            publicRoute.map(({path, Component, exact}) => (
                                <Route exact={exact}
                                       key={path}
                                       path={path}>
                                    <Component />
                                </Route>
                            ))
                        }
                        <Redirect to="/login" />
                    </>
                )
            }
        </Switch>
    )
}

export default AppRouter;