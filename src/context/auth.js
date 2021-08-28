import {createContext, useContext, useState} from 'react';

const AuthContext = createContext(null);

const AuthContextProvider = ({
     children
}) => {
    const [auth, setAuth] = useState({
        value: false,
        name: "",
        loading: true,
    });

    const logout = () => {
        setAuth({
            value: false,
            name: "",
            loading: false,
        });
    }

    const login = (name) => {
        setAuth({
            value: true,
            name,
            loading: false,
        });
    }

    const value = {
        auth,
        logout,
        login
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);