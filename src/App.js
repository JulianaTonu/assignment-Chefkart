
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers]=useState([])
const [active, setActive] =useState('')
console.log("active",active)

const [sort, setSort]=useState("ASC")


  useEffect(()=>{
      fetch('userData.json')
         
      .then(res=> res.json())
      .then(data=>{
          setUsers(data)
          console.log('AllUser', data)
      })
  },[])



// const handleAscSort =()=>{
//   const strAscending = [...users].sort((a, b) =>
//     a.name > b.name ? 1 : -1,
//   );
//   console.log(strAscending);

// }

// const handleDeseSort=()=>{
// const strDescending = [...users].sort((a, b) =>
// a.first_name > b.first_name ? -1 : 1,
// );
// console.log(strDescending);
// }
  return (
    <div grid grid-cols-1 >
    <h1 className='text-2xl font-bold text-purple-500 text-center my-5'> Users Data</h1>

    <div className="overflow-x-auto">
<table className="table w-full">

<thead>
<tr>

<th>
</th>


<th className=''><select className="selected-order w-full max-w-lg shadow-xl " value='FirstName'>
  <option disabled selected >FirstName </option>
  <option onClick={()=>setSort("ASC")} >Sort by ASC</option>
  <option onClick={()=>setSort("DESC")}>Sort by DESC</option>
  </select></th>
<th>LastName</th>
<th>Email</th>
<th>Gender</th>
<th>Ip Address</th>
<th>airport Code</th>
<th>Time</th>
<th>Status</th>
<th>Mobile</th>
<th>Area</th>
<th>Show</th>
<th>Edit</th>


</tr>
</thead>
<tbody>

  {
sort === "ASC" ?
[...users].sort((a, b) =>
    a.first_name > b.first_name ? 1 : -1,
  ).map((user)=><tr key={user.id} 
  className={active === user.id && "bg-sky-300"}
  onClick={()=> {setActive(user.id)}}>
      {/* {console.log(active, user.id)} */}
      <th></th>
      {/* <th>{i+1}</th> */}
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>{user.gender}</td>
      <td>{user.ip_address}</td>
      <td>{user.airportCode}</td>
      <td>{user.time}</td>
      {
        user.status === 'true'? 
        <td className='bg-success'>{user.status}</td>
        :
        <td className='bg-red-500'>{user.status}</td>
      }
    
      <td>{user.mobile}</td>
      <td>{user.area}</td>
      <td>{user.show}</td>
      <td>{user.edit}</td>
    </tr>
    )
:

[...users].sort((a, b) =>
    a.first_name > b.first_name ? -1 : 1,
  ).map((user)=><tr key={user.id} 
  className={active === user.id && "bg-sky-300"}
  onClick={()=> {setActive(user.id)}}>
      {/* {console.log(active, user.id)} */}
      <th></th>
      {/* <th>{i+1}</th> */}
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>{user.gender}</td>
      <td>{user.ip_address}</td>
      <td>{user.airportCode}</td>
      <td>{user.time}</td>
      {
        user.status === 'true'? 
        <td className='bg-success'>{user.status}</td>
        :
        <td className='bg-red-500'>{user.status}</td>
      }
    
      <td>{user.mobile}</td>
      <td>{user.area}</td>
      <td>{user.show}</td>
      <td>{user.edit}</td>
    </tr>
    )

  }


</tbody>
</table>
</div>
</div>
);

}

export default App;

