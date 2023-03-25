import React, { useEffect, useState } from "react";
import { db } from "../config/fire-base-config";
import { getDoc, doc, updateDoc } from "firebase/firestore";
// import { async } from '@firebase/util';

export default function CommunityOfficerPage() {
  const [inventory, setInventory] = useState({});
  const [workers, setWorkers] = useState(0);
  const [materials, setMaterials] = useState(0);

  const docRef = doc(db, "inventory", "ONE");

  const getInventory = async () => {
    try {
      const docSnap = await getDoc(docRef);
      const filteredDoc = docSnap.data();
      setInventory(filteredDoc);
    } catch (error) {
      console.error(error);
    }
  };
  const update = async () => {
    try {
      await updateDoc(docRef, {
        workers: workers,
        materials: materials,
      });
      getInventory();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInventory();
  },[]);

  return (
    <div className="p-6 flex flex-col items-center">
      <div className="flex px-6 space-x-28">
        <div>
          <span className="font-bold">Available Workers: </span>
          <span>{inventory.workers}</span>
        </div>
        <div>
          <span className="font-bold">Available Materials: </span>
          <span>{inventory.materials}</span>
        </div>
      </div>
      <div className="p-6 space-x-6 space-y-3">
        <input
          type="number"
          placeholder="workers"
          className="border-2 border-solid p-2"
          onChange={(e) => setWorkers(e.target.value)}
        />
        <input
          type="number"
          placeholder="materials"
          className="border-2 border-solid p-2"
          onChange={(e) => setMaterials(e.target.value)}
        />
        <button className="p-2" onClick={update}>
          Update
        </button>
      </div>
    </div>
  );
}
