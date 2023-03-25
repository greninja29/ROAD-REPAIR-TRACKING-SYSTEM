import React, { useState } from "react";
import { db } from "../config/fire-base-config";
import { collection, addDoc } from "firebase/firestore";

export default function ClerkPage() {
  const com_coll_ref = collection(db, "complaints");

  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  // const [matenum,setMatenum] = useState(0);
  // const [prioritynum,setPrioritynum] = useState(0);
  // const [workernum,setWorkernum] = useState(0);

  const submitToDb = async () => {
    try {
      await addDoc(com_coll_ref, {
        location: location,
        description: description,
        priority: 0,
        material_required: 0,
        workers_required: 0,
      });
      setLocation('');
      setDescription('');
      document.getElementById('text-box').value=''
      document.getElementById('loc-box').value=''
      alert("success");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-10  flex flex-col items-start ">
      <div className="flex flex-col justify-around space-y-5 p-6">
        <input
          className="border-2 border-solid p-2"
          type="text"
          id="loc-box"
          placeholder="location.."
          onChange={(e) => setLocation(e.target.value)}
        />
        <textarea
          rows="10"
          cols="75"
          id="text-box"
          placeholder="Enter your complait debscription...."
          className="p-20 border-2 border-solid"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {/* <input className='border-2 border-solid p-2' type="number" placeholder='materials_number..' onChange={(e)=>setMatenum(e.target.value)}/>
        <input className='border-2 border-solid p-2' type="number" placeholder='priority..' onChange={(e)=>setPrioritynum(e.target.value)} />
        <input className='border-2 border-solid p-2' type="number" placeholder='workers_number..' onChange={(e)=>setWorkernum(e.target.value)}/> */}
      </div>
      <button className="p-2" onClick={submitToDb}>
        submit
      </button>
    </div>
  );
}
