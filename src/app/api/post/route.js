import { db } from "@/firebase/config"
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server"
export async function GET(request) {
  const url = new URL(request.url)
  const title = url.searchParams.get("title")

      try{
        const q = doc(db, "landmark",`${title}`);
        const querySnapshot = await getDoc(q);
        return new NextResponse(JSON.stringify(querySnapshot.data()),{status:200})
      } catch (error) {
        return new NextResponse("Error",{status:500})
      }

  }