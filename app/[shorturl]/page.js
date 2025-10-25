import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {

  const resolvedParams = await params;
  const shorturl = resolvedParams?.shorturl;

  if (!shorturl) {
    redirect(process.env.NEXT_PUBLIC_HOST || "/");
  }

  const normalizedShort = shorturl.trim().toLowerCase();

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl: normalizedShort });

  if (doc?.url) {
    redirect(doc.url); 
  } else {
    redirect(process.env.NEXT_PUBLIC_HOST || "/"); 
  }

  return <p>Redirecting...</p>; 
}
