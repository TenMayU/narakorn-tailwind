import { db } from "@/firebase/config"
import { collection, query, where, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server"
export const GET = async (request,{params})=> {
  const url = new URL(request.url)
  const {id} = params
  console.log(id)

      try{
        const q = query(collection(db, "landmark"), where("tag", "==", `${id}`));
        const querySnapshot = await getDocs(q);
        const data = await querySnapshot.docs.map((doc)=>({
          ...doc.data(),
          id: doc.id,
       }))
        return new NextResponse(JSON.stringify(data),{status:200})
      } catch (error) {
        return new NextResponse("Error",{status:500})
      }

  }
