import {createContext, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Context = createContext({});

export const ContextProvider = ({children}) => {

    const URL = "http://mskko2021.mad.hakta.pro/api/"

    const [feelings, setFeelings] = useState([]);
    const [quotes, setQuotes] = useState([]);
    const [isProfile, changeProfileState] = useState(true);
    const [isRouter, setIsRouter] = useState(true);

    const [user, setUser] = useState({
        email: "",
        name: "",
        id: "",
        avatar: ""
    })

    const [photos, setPhotos] = useState([
        {id: 0, image: require("../../assets/photos/sunset.png"), postTime: `11:11`},
        {id: 1, image: require("../../assets/photos/night.png"), postTime: `11:11`},
        {id: 2, image: require("../../assets/photos/sunrise.png"), postTime: `11:11`},
        {id: 3, image: require("../../assets/photos/fire.png"), postTime: `11:11`},
    ])

    async function getFeelings() {
        try {
            const response = await fetch(URL + "feelings",
                {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                });
                const result = await response.json();
                setFeelings(result.data);
        } catch(err) {
            console.error(err);
        }
    }

    async function getQuotes() {
        try {
            const response = await fetch(URL + "quotes",
                {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                })
            const result = await response.json();
            setQuotes(result.data);
        } catch(err) {
            console.error(err);
        }
    }
    
    async function authorise(email, pass) {
        try {
            const response = await fetch(URL + "user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": email,
                    "password": pass
                })
            })

            const result = await response.json();

            await AsyncStorage.setItem("userInfo", JSON.stringify({
                email: result.email,
                name: result.nickName,
                id: result.id,
                avatar: result.avatar
            }))

            const userInfo = await AsyncStorage.getItem("userInfo");
            setUser(JSON.parse(userInfo));

            if (result.error) {
                throw new Error("Invalid login or password");
            }
            return true
        } catch(err) {
            console.error(err);
            return false
        }
    }

    async function exit() {
        await AsyncStorage.setItem("userInfo", JSON.stringify({
            email: user.email,
            name: "",
            id: "",
            avatar: ""
        }))
        setUser({
            email: user.email,
            name: "",
            id: "",
            avatar: ""
        })
    }



    const values = {
        getFeelings,
        feelings,
        quotes,
        getQuotes,
        authorise,
        user,
        setUser,
        isProfile,
        changeProfileState,
        isRouter,
        setIsRouter,
        exit,
        photos,
        setPhotos
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}