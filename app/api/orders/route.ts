import { pool } from "@/config/dbConfig";

export async function POST(req:any){
    const connection = await pool.connect()
    const body = await req.json()
    const result = await connection.query(`INSERT INTO orders("userId", "productId", name, address, contact) VALUES($1, $2, $3, $4, $5)`,[body.userId, body.productId, body.name, body.address, body.contact])
    return Response.json({message: "success"})
}
export async function GET(req:any){
    const connection = await pool.connect()
    const result = await connection.query(`SELECT * FROM orders`)
    return Response.json(result.rows)
}