import DB_URL from "@/utill/dababase";

export default async function handler(req, res) {
    if(req.method == 'POST' && (req.body.title && req.body.content) ) {
        await fetch(`${DB_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                title: req.body.title,
                content: req.body.title
            })
        })
        return res.status(200).redirect("/list")
    }
    return res.status(403).json("errro")
}