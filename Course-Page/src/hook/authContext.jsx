import{createContext,useState,useEffect} from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){
    
    const[token,setToken] = useState(null);
    const[user,setUser] = useState(null);

    useEffect(()=>{
         const savedToken = localStorage.getItem("token");
         const savedUser = sessionStorage.getItem("user");

         if(savedToken) setToken(savedToken);
         if(savedUser) setUser(savedUser);
    },[])

    const login = (token,userData)=>{
         localStorage.setItem("token",token);
         localStorage.setItem("user",userData);
         setToken(token);
         setUser(userData);
    }

    const logout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null)
        setUser(null)
    }


    return(
         <AuthContext.Provider value={{ token, user, login, logout}}>
      {children}
    </AuthContext.Provider>
    )
}