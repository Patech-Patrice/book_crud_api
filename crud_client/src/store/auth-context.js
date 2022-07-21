import React, { useState } from 'react';

const AuthContext = React.createContext({
    token:'',
    isLoggedIn: false,
    isCurrentUser: false,
    login: (token) => {},
    logout: () => {},
});

//sets token expiration time
const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime(); //gets current timestamp in milliseconds
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
}

export const AuthContextProvider = (props) => {
    //initialize state with token
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    // const [currentUser, setCurrentUser] = useState()

    const userIsLoggedIn = !!token;

    const userIsCurrentUser = !!token;

    


    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
       
    };

    const loginHandler = (token, expirationTime ) => {
        setToken(token);
        //use local storage to persist user login with token
        localStorage.setItem('token', token);
        const remainingTime = calculateRemainingTime(expirationTime);

        setTimeout(logoutHandler, remainingTime);

    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        isCurrentUser: userIsCurrentUser,
        login: loginHandler,
        logout: logoutHandler
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
