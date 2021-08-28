import {useState} from 'react';
import Input from "../componetns/UI/Input/Input";
import Button from "../componetns/UI/Button/Button";
import {useAuthContext} from "../context/auth";

const Login = () => {
    const {login} = useAuthContext();
    const [loginField, setLoginField] = useState("");

    const handleInputLogin = (login) => {
        setLoginField(login);
    }


    const handleLogin = () => {
        localStorage.setItem('auth', true);
        localStorage.setItem('name', loginField);
        login(loginField);
    }

    return (
        <div>
            <Input placeholder="Login"
                   onChange={handleInputLogin}
                   value={loginField} />
            <Button onClick={handleLogin}>
                Войти
            </Button>
        </div>
    )
}

export default Login;