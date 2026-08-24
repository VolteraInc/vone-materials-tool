import { useEffect, useState } from "react";
import { db } from "../index";
// import { FetchMaterials_Vone } from "./VoneMaterials"; // not used currently

export function Loadmaterials_Nova() {
  const [data, setData] = useState([""]);
  const materials = db.collection("materials");

  useEffect(() => {
    try {
      materials.get().then((querySnapshot) => {
        querySnapshot.docs.forEach((result) => {
          setData((arr) => [...arr, result.data()["Id"]]);
          console.log(result.data());
        });
      });
    } catch {
      console.error();
    }
  });
  return {
    data,
  };
}

// function getCollection(Id: string) {

//   db.collection("materials").doc(Id).get().then((querySnapshot => {
//     console.log(querySnapshot)
//   })

//   return ();
//  }
