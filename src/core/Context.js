import {createContext, useState} from "react";

export const Context = createContext({});

export const ContextProvider = ({children}) => {

    const [feelings, setFeelings] = useState([]);
    const [quotes, setQuotes] = useState([]);

    const user = {
        email: "",
        login: "",
        name: "",
        id: "",
        avatar: ""
    }

    async function getFeelings() {
        try {
            const response = await fetch("http://mskko2021.mad.hakta.pro/api/feelings",
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
            const response = await fetch("http://mskko2021.mad.hakta.pro/api/quotes",
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
            const response = await fetch("http://mskko2021.mad.hakta.pro/api/user/login", {
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
            if (result.error) {
                throw new Error("Invalid login or password");
            }
            return true
        } catch(err) {
            console.error(err);
            return false
        }
    }

    const values = {
        getFeelings,
        feelings,
        quotes,
        getQuotes,
        authorise,
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}