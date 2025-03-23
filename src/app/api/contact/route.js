import { MongoClient } from 'mongodb'

export async function POST(request) {
  const { name, email, message } = await request.json()
  
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db()
    await db.collection('contacts').insertOne({
      name,
      email,
      message,
      date: new Date()
    })
    client.close()
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: "Message failed to send" }), { status: 500 })
  }
}
