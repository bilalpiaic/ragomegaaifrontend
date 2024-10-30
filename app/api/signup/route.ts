import { pool } from "@/config/dbConfig"

export async function POST(req: any) {
    const connection = await pool.connect()
    const body = await req.json();
    const exists = await connection.query("SELECT * FROM users WHERE email=$1",[body.email])
    if (exists.rows[0]) {
        if (exists.rows[0].provider === body.provider) {
            return Response.json({message: "error"})
        }
        else{
            if (body.provider === "credentials") {
                const result = await connection.query("UPDATE users SET password=$1, provider=$2 WHERE email=$3",[body.password, body.provider, body.email])
                connection.release()
                return Response.json({message: "User updated to credentials"})
            }
            else if (body.provider === "github") {
                const result = await connection.query("UPDATE users SET password=$1, provider=$2 WHERE email=$3",[body.password, body.provider, body.email])
                connection.release()
                return Response.json({message: "User updated to github"})
            }
        }
    }
    else{
        const result = await connection.query("INSERT INTO users(username, email, password, provider) VALUES($1,$2,$3,$4)",[body.username, body.email, body.password, body.provider])
        connection.release()
        return Response.json({message: "User created"})
    }
}