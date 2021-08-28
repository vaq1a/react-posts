import {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./componetns/AppRoute";
import NavBar from "./componetns/UI/NavBar/NavBar";
import {useAuthContext} from "./context/auth";

function App() {
    const {login} = useAuthContext();

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            login(localStorage.getItem('name'));
        }
    }, []);

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
      )
}

export default App;
