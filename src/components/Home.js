import React,{useEffect, useState} from 'react'
import {db} from '../config/fire-base-config'
import {getDocs,collection}  from 'firebase/firestore'

export default function Home() {

  // const [complaintsList, setcomplaintsList] = useState([]);
  const complaintsCollection = collection(db, "complaints");  
  const [sortedComplaints,setSortedComplaints]= useState([]);

  const getComplaintslist = async () => {
    //Read Data ans set movie list
    try {
      const data = await getDocs(complaintsCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
      // setcomplaintsList(filteredData);
      let temp = filteredData.sort((a,b)=>(a.priority>b.priority)? 1 :(a.priority<b.priority)? -1 :0);
      setSortedComplaints(temp);
      console.log(temp);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(()=>{
    getComplaintslist();
  },[])

  return (
    <div className='p-6 space-y-3'>
      {sortedComplaints.map((complain)=>(
        <div className={complain.completeStatus ?"bg-green-900 p-3 text-white rounded":"bg-red-900 p-3 text-white rounded "} >
          <h1 >{complain.priority}</h1>
          <span className='font-bold'>Location: </span>
          <h1 Style='display:inline'>{complain.location}</h1>
          <br />
          <span className='font-bold'>id: </span>
          <h1 Style='display:inline'> {complain.id}</h1>
        </div>
      ))}
    </div>
  )
}
