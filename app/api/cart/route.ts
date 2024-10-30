import { pool } from "@/config/dbConfig";

export async function POST(req: any) {
    const connection = await pool.connect()
    const body = await req.json()
    const exists = await connection.query(`SELECT * FROM cart WHERE "userId"=$1`, [body.userId])
    if (exists.rows[0]) {
        const result = await connection.query(`UPDATE cart SET cart=array_append(cart, $1) WHERE "userId"=$2`, [body.productId, body.userId])
        return Response.json({ message: "updated" })
    }
    const result = await connection.query(`INSERT INTO cart("userId", cart) VALUES($1, $2)`, [body.userId, [body.productId]])
    return Response.json({ message: "added" })
}
export async function GET(req: any) {
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get("userId")
    const connection = await pool.connect()
    const result = await connection.query(`SELECT * FROM cart WHERE "userId"=$1`, [query])
    if(!result.rows[0]){
        return Response.json({message: "cart empty"})
    }
    return Response.json(result.rows[0])
}
export async function DELETE(req: any) {
    const connection = await pool.connect()
    const body = await req.json()
    const result = await connection.query(`UPDATE cart SET cart=array_remove(cart, $1) WHERE "userId"=$2`, [body.productId, body.userId])
    if(!result.rows[0]){
        return Response.json({message: "cart empty"})
    }
    return Response.json(result.rows[0])
}