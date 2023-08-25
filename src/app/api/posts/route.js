import { db } from "@/firebase/config"
import { collection, query, where, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server"
export async function GET(request) {
  const url = new URL(request.url)
  const location = url.searchParams.get("location")
  const tag = url.searchParams.get("tag")

      try{
        const q = query(collection(db, "landmark"), where("tag", "==", `${location}`));
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
