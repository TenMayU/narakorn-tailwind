import { db } from "@/firebase/config"
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server"
export const GET = async (request,{params})=> {
  const url = new URL(request.url)
  const {id} = params

      try{
        const q = doc(db, "landmark",`${id}`);
        const querySnapshot = await getDoc(q);
        return new NextResponse(JSON.stringify(querySnapshot.data()),{status:200})
      } catch (error) {
        return new NextResponse("Error",{status:500})
      }

  }