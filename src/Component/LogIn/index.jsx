import React from 'react'

function LogIn() {
    //logIn
    const logIn = (user) => {
        const newUserLOg = JSON.stringify(user);
        localStorage.setItem('account', newUserLOg);
        setAccount(user);
        setSingOut(false);
    };
    return (
        <div>LogIn</div>
    )
}

export default LogIn