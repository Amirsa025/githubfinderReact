import React from 'react'

const UserItem = (props) => {
   const {avatar_url,login,html_url}= props.user
    return (
        <div className="col-md-4">
            <div className="card card-body">
                    <div className="text-center p-3">
                    <img src={avatar_url} alt="" className="rounded-circle w-25 "></img>
                    <h3  className="align-items-center">{login}</h3>
                    </div>
                        
               <a href={html_url} className="btn btn-primary card-link">More</a>
            </div>
        </div>
    )
}

export default UserItem
