import { pool } from "@/config/dbConfig";

export async function GET(req: any) {
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get("email")
    const connection = await pool.connect()
    const result = await connection.query(`SELECT * FROM users WHERE email=$1`, [query])
    return Response.json(result.rows[0].id)
}