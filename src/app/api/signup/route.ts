import { dbConnect } from "@/config/dbConfig.js"
import { User } from "@/models/userModel.js"

dbConnect()

export async function POST(req: any) {
    const body = await req.json()
    const exists = await User.findOne({ "user.email": body.email })
    if (body.provider === "credentials") {
        if (exists) {
            if (exists.user.provider === "credentials") {
                throw new Error("email already exists")
            }
            else if (exists.user.provider === "github") {
                const result = await User.updateOne(
                    { "user.email": body.email },
                    {
                        $set: {
                            "user.password": body.password,
                            "user.provider": "credentials"
                        }
                    }
                )
                return Response.json({ message: "Success" })
            }
        }
        else {
            const user = await User.create({ user: body, pdf: "" })
            return Response.json({ message: "Success" })
        }
    }
    else if (body.provider === "github") {
        if (exists) {
            if (exists.user.provider === "credentials") {
                const result = await User.updateOne(
                    { "user.email": body.email },
                    {
                        $set: {
                            "user.password": null,
                            "user.provider": "github"
                        }
                    }
                )
                return Response.json({ message: "Success" })
            }
            else if(exists.user.provider === "github"){
                return Response.json({message: "Success"})
            }
        }
        else{
            const user = User.create({user: body, pdf: ""})
        }
    }
}