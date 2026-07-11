import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import {
    getProfile
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadUser = async () => {

            try {

                const data = await getProfile();

                setUser(data.user);

            }

            catch {

                localStorage.removeItem("token");

            }

            finally {

                setLoading(false);

            }

        };

        if (localStorage.getItem("token"))

            loadUser();

        else

            setLoading(false);

    }, []);

    return (

        <AuthContext.Provider

            value={{

                user,

                setUser,

                loading

            }}

        >

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () => useContext(AuthContext);