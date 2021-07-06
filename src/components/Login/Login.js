import React from 'react';
import Button from '@material-ui/core/Button';
import "./Login.css";
//import { auth, provider } from '../../firebase';
//import { useStateValue } from '../StateProvider';
//import {actionTypes} from "../Reducer";

const Login = () => {
    //const [state,dispatch]= useStateValue();
    const signIn=()=>{
        // auth.signInWithPopup(provider)
        // .then(result=>{
        //     dispatch({
        //         type:actionTypes.SET_USER,
        //         user:result.user,
        //     })
        //     console.log(result);
        // }).catch(err=>{
        //     alert(err.message);
        // })
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png" alt=""/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
            </div>
            <Button  type="submit" onClick={signIn}>Sign In</Button>
        </div>
    );
};

export default Login;