import React, { useEffect, useState } from "react";

const API_URL = `https://jsonplaceholder.typicode.com/users`;


const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const getDatas = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            if (data) {
                setIsLoading(false);
                setUsers(data);
            }
            else {
                setIsError({
                    show: true,
                    msg: data.error
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    

useEffect(() => {
    getDatas(API_URL);
    
    

},[]);

return <AppContext.Provider value={{ isLoading, isError, users }}>
    {children}
</AppContext.Provider>
};



export { AppContext, AppProvider };