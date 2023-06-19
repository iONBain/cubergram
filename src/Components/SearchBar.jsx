import { useContext, useEffect, useState } from "react"
import { DataContext } from "../Contexts/DataContext"
import actionTypes from "../backend/utils/commands"
import "./Component.css"

const SearchBar = () => {
    const {data:{searchedUser,users},dataDispatch} = useContext(DataContext)
    const [showSuggestions,setShowSuggestions] = useState(false)
    const foundUserList = users.filter(({username,firstname,lastname})=> 
    username.toLowerCase().includes(searchedUser.toLowerCase()) || 
    firstname.toLowerCase().includes(searchedUser.toLowerCase()) || 
    lastname.toLowerCase().includes(searchedUser.toLowerCase()) 
    )

    
    const handleSearch = (e) => {
        dataDispatch({
            type:actionTypes.SET_SEARCHEDUSER,
            payload:e.target.value
        })

    }
    useEffect(()=>{
        if(searchedUser.length!==0){
            setShowSuggestions(true)
        }else{
            setShowSuggestions(false)
        }
    },[searchedUser])

    // main render return
    return (
        <section className="search-main">
            <input type="text" placeholder="Search user ..." value={searchedUser} onInput={handleSearch} />
            <section className={`search-suggestions ${!showSuggestions && "display-none"}`}>
               {
                foundUserList.length===0 ? "No user(s) found!" : foundUserList.map(({username})=> `user: ${username}`)
               }
            </section>
        </section>
    )
}


export default SearchBar