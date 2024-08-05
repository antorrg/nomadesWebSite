import {createContext, useContext} from 'react'
import {useState, useEffect} from 'react'

const AuthContext = createContext();

const AuthProvider = ({children,  initialAuthenticated = false, initialUser = null })=>{
    const [authenticated, setAuthenticated]= useState(initialAuthenticated);
    const [user, setUser]= useState(initialUser);

//*Con esta funcion prevenimos el deslogueo por refresh.
    useEffect(()=>{
        const storedToken = localStorage.getItem('validToken')
        const storedUser = localStorage.getItem('user')
        if(storedToken && storedUser){
            setAuthenticated(true)
            setUser(JSON.parse(storedUser))
        }
    },[])

    const login = (userData, token) => { 
        //console.log('user: ', userData)
        //console.log('tok', token)
        setAuthenticated(true);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('validToken', token)
     }

     const logout = () => { 
        setAuthenticated(false);
        setUser(null);
        //Limpiamos el token y el user
        localStorage.clear();
      }
    return(
        <AuthContext.Provider value={{authenticated, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = ()=>{
    return useContext(AuthContext);
};

export {AuthProvider, useAuth}