import React, {createContext, useState, useContext, useEffect, useCallback} from 'react';
import api from '../services/api'
import AsyncStorage from '@react-native-community/async-storage'


interface StateAuth {
    token: string,
    user: object
}

interface NewSignInCredentials {
    email: string;
    password: string;
}

interface newAuthContextData {
    user: object,
    newSignIn(credentials: NewSignInCredentials): Promise<void>;

}

const AuthContext = createContext<newAuthContextData>({} as newAuthContextData);

const AuthProvider: React.FC = ({ children })=> {
    const [ data, setData] = useState<StateAuth>({} as StateAuth);
    // const [ loading, setLoading ] = useState(true)

    useEffect(()=>{
        async function loadStoragedData(): Promise<void> {
            const [token, user] = await AsyncStorage.multiGet([
                '@GoBarber:token', 
                '@GoBarber:user',
            ]);

            if(token[1] && user[1]) {
                setData({ token: token[1], user: JSON.parse(user[1]) });
            }
     }

        loadStoragedData();
    },[]);

    const newSignIn = useCallback(async ({email, password}) => {
        
        const response = await api.post('sessions', {
            email,
            password
        }) 

        const {user, token} = response.data


        await AsyncStorage.multiSet([
            ['@GoBarber:user', JSON.stringify(user)], ['@GoBarber:token', token],
        ])
        setData({user, token})
    }, [])

    // const signOut = useCallback(async () => {
    //     await AsyncStorage.multiRemove(['@GoBarber:token', '@GoBarber:user'])

    //     setData({} as StateAuth);
    // }, []);

    return(
        <AuthContext.Provider value={{ user: data.user, newSignIn}}>
            {children}
        </AuthContext.Provider>
)
}

function newUseAuth(): newAuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context;
}


export { AuthProvider, newUseAuth};