import React,{useState,useEffect} from 'react';
import {Box,Button,Typography,CircularProgress} from '@mui/material';
import Spotify from '../assests/spotify-green.png';
import classes from './SignUpPage.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { SignAction } from '../store/sign';
import { auth } from '../store/firebase';
const SignUpPage = () => {
  const [email,setEmail] = useState(''); 
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false);
  const sign = useSelector(state => state.sign); 
  const dispatch = useDispatch();
  const navigate = useNavigate();


  
  const inputChangeHandler = (type,data)=>{
    dispatch(SignAction.setError({error:''}));
    if(type==='email'){
        setEmail(data);
    }else if(type==='password'){
        setPassword(data);
    }
  }


  const submitHandler = async(event)=>{
    event.preventDefault();
    dispatch(SignAction.setError({error:''}));
    try{
       setLoading(true); 
       await createUserWithEmailAndPassword(auth,email,password);
        dispatch(SignAction.setError({error:''}));
        setLoading(false);
        navigate('login');
    }
    catch(error){
        dispatch(SignAction.setError({error:error.message}));
        setLoading(false);
    }
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
     dispatch(SignAction.setUser({user:currentuser}));
    })
    return ()=>{
      unsubscribe();
    }
  },[dispatch,auth]);

  return (
   <Box sx={{bgcolor:'#262626',borderRadius:4,maxWidth:'500px'}}>
    <Box sx={{pt:3,width:'100%',display:'flex',flexDirection:'row',justifyContent:"center",gap:2,alignItems:'center'}}>
        <img style={{position:"relative",width:'80px',height:'80px'}} src={Spotify}/>
        <Typography variant='h6' sx={{fontSize:'35px',fontWeight:600,color:'#fff'}}>Spotify</Typography>
    </Box>
    <form onSubmit={submitHandler}  className={classes.form}>
        <Box  className={classes.box} >
            <input onChange={(event)=>inputChangeHandler('email',event.target.value)} placeholder='Email' type='email' name='email' id='email' required/>
        </Box>
        <Box className={classes.box}>
            <input onChange={(event)=>inputChangeHandler('password',event.target.value)} placeholder='Password' type='password' name='password' id='password' required/>
        </Box>
       {sign.error && <Box sx={{display:"flex",justifyContent:'center'}}><Typography sx={{color:'red'}}>{sign.error}</Typography></Box>}
       {loading && <Box sx={{display:"flex",justifyContent:'center'}}><CircularProgress sx={{color:'#1ED760'}}/></Box>}
        <Box className={classes.link} sx={{display:'flex',flexDirection:'column',gap:5,justifyContent:'center',alignItems:'center'}}>
            <Button type='submit' variant='contained'sx={{width:'100%',py:'12px',fontSize:'16px',borderRadius:8,bgcolor:'#1ED760','&.MuiButton-root:hover':{
                bgcolor:"#159442"
            }}}>Sign Up</Button>
            <NavLink to='login'>Already have an account?</NavLink>
        </Box>
    </form>
   </Box>
  )
}

export default SignUpPage;