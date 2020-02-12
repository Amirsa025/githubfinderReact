import React,{useReducer} from 'react'
import Context from './githubContext'
import GithubReducer from './githubReducer'
import axios from 'axios'
import {GET_USERS,GET_USER,SEARCH_USERS} from './types'

const GitHubState =props=>{
    const initalState ={
        users: [],
        
    }
    
    const [state,dispatch]=useReducer(GithubReducer,initalState)
  
    const getUsers =async()=>{
        
        const res = await axios.get('https://api.github.com/users')
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
        
    }

    const SearchUser =async(text) =>{
        const res =await axios.get(`https://api.github.com/search/users?q=${text}&
        client_id=${process.env.REACT_APP_GITHUB_FINDER_CLEINT_ID}& client_Secrent=${process.env.REACT_APP_GITHUB_FINDER_CLEINT_SECRET}`)
  
       dispatch({
           type:SEARCH_USERS,
           payload:res.data.item
       })
      }
   const getUser = async(username)=>{
       const res = await axios.get(`https://api.github.com/users/${username}`)
       dispatch({
           type:GET_USER,
           payload: res.data
       })

   }

    return (<Context.Provider  value={
        {
            users:state.users,
            loading:state.loading,
            getUsers,
            getUser,
            SearchUser  
        
        }}>
       {props.children}
    </Context.Provider>)
     

}
export default GitHubState