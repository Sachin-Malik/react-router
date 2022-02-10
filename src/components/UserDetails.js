import React from 'react'
import {useParams, useSearchParams} from 'react-router-dom'

function UserDetails() {
  
  const params = useParams();
  console.log(params);
  const {id} = params;

  const [searchParams, setSearchParams] = useSearchParams();
  const activeUser = searchParams.get('filter')==='active';
  return (
    <div>
     <h1>User-Details of {id} </h1>
     <button type='button' onClick={()=>setSearchParams({filter:'active'})}>Set Filter</button>
     <button type='button' onClick={()=>setSearchParams()} >Reset Filter</button>
     <h2>{activeUser ? 'List of active users' : 'List of all users'}</h2>
    </div>

  )
}

export default UserDetails