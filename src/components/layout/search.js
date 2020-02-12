import React,{useContext} from 'react'
import GithubContext from '../Context/githubContext'
const Search = (props) => {
    const githubContext = useContext(GithubContext)
    const {SearchUser}= githubContext
    const keyUpHandler = (e)=>{
        SearchUser(e.target.value)
    }
    return (
        <div className="text-white w-100 py-3">
            
            <input type="search" name="search" placeholder="Search ..." 
            className="form-control" onKeyUp={keyUpHandler}/>    
        </div>
    )
}

export default Search
