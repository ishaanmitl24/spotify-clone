import { SignAction } from "./sign";

export const fetchUserData = (cart)=>{
    return async(dispatch)=>{
        const fetchData = async()=>{
            const response = await fetch('https://spotify-auth-c4e29-default-rtdb.firebaseio.com/user.json');

            if(!response.ok){
                throw new Error("Fetching failed");
            }
            const data = await response.json();
            return data;
        }
        try{
            const userData = await fetchData();
           dispatch(SignAction.setEmail({email:userData.email}));
           dispatch(SignAction.setUser({user:userData.user})); 
        }
        catch(error){
            dispatch(SignAction.setError({fetchError:error.message}));
        }
    }
}

export const sendUserData = (data)=>{
    return async(dispatch)=>{
        const sendUserNewRequest = async()=>{
            const response = await  fetch('https://spotify-auth-c4e29-default-rtdb.firebaseio.com/user.json',{
                method:'PUT',
                body:JSON.stringify({email:data.email,user:data.user})
              });
              if(!response.ok){
                throw new Error("Error occured.");
              }
        }
         try{
            await sendUserNewRequest();
            }
         catch(error){
            dispatch(SignAction.setError({fetchError:error.message}));
        }
          
         
    }
}

export const sendArtistData = (artist)=>{
    return async(dispatch)=>{
        const sendUserNewRequest = async()=>{
            const response = await  fetch('https://spotify-auth-c4e29-default-rtdb.firebaseio.com/spotify.json',{
                method:'PUT',
                body:JSON.stringify({artist:artist})
              });
              if(!response.ok){
                throw new Error("Error occured.");
              }
        }
         try{
            await sendUserNewRequest();
            }
         catch(error){
            console.log(error.message);
        }
          
         
    }
}