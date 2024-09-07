//importing the create context
import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//exporting the create context
export const AppContext = createContext();

export default function AppContextProvider({children})
{
    //know the states you want
    const[loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);

    //data getting
    async function fetchBlogPosts(page=1)
    {
        setLoading(true);
        let url =`${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
        }
        catch(error){
            console.log("error in fetching");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page)
    {
        setPage(page);
        fetchBlogPosts(page);
    }



    //store data in value array
    const value={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}