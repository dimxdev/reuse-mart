import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext()

export function AuthProvider({children}) {
    const navigate = useNavigate()
    const [auth, setAuth] = useState({
        token: null, 
        user: null, 
        isAuthenticated: false,
        isLoading: true
    })

    useEffect(() => {
       const token = localStorage.getItem("token")
       const userStr = localStorage.getItem("user")

       if (token && userStr) {
        const user = JSON.parse(userStr)

        setAuth({
            token: token,
            user: user,
            isAuthenticated: true,
            isLoading: false
        }) 
       } else {
        setAuth((prev) => {
            return {...prev, isLoading: false}
        })
       }
    }, [])

    const login = (token, user) => {
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))

        setAuth({
            token: token,
            user: user, 
            isAuthenticated: true, 
            isLoading: false
        })
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")

        setAuth({
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false
        })

        navigate("/")
    }

    return (
        <AuthContext.Provider value={{auth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)