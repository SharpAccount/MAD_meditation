import {createContext, useState} from "react";
import axios from "axios";

export const Context = createContext({});

export const ContextProvider = ({children}) => {

    const [feelings, setFeelings] = useState([]);

    const routesOfAPI = {
        feelings: "http://mskko2021.mad.hakta.pro/api/feelings"
    }

    async function getData(url) {
        try {
            const response = await fetch(url,
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
    

    const values = {
        getData,
        feelings,
        setFeelings,
        routesOfAPI
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}