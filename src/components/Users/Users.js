import React ,{useContext,useEffect}from "react";
import UserItem from "./userItem";
import Spinner from './Spinner'
import GithubContext from '../Context/githubContext'
const Users = ()=> {
  const githubContext = useContext(GithubContext)
  const {users,getUsers} = githubContext
      githubContext.getUsers();  
        useEffect(()=>{
          getUsers();
        },[])

 if(users){
  return (
    <div className="container mt-3">
       <div className="row">
     {users.map(users =><UserItem key={users.id} user={users}/>)}
    </div>
    </div>
  );
 }else{
   return <Spinner/>
 }
};

export default Users;
