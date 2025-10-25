import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    let { url, shorturl } = body;

    if (!url || !shorturl) {
      return Response.json(
        { success: false, error: true, message: "Missing required fields." },
        { status: 400 }
      );
    }

    shorturl = shorturl.trim().toLowerCase();

    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const existing = await collection.findOne({ shorturl });
    if (existing) {
      return Response.json(
        { success: false, error: true, message: "Short URL already exists!" },
        { status: 409 }
      );
    }

    await collection.insertOne({ url, shorturl, createdAt: new Date() });

    return Response.json(
      { success: true, error: false, message: "URL generated successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error in /api/generate:", err);
    return Response.json(
      { success: false, error: true, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
