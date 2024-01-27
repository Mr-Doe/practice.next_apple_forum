import DB_URL from "@/utill/dababase";

export default async function handler(req, res) {
    if(req.method == "POST" && (req.body.title && req.body.content)) {
        await fetch(`${DB_URL}/posts/${req.body.id}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                title: req.body.title,
                content: req.body.content
            })
        })
        res.redirect(302, "/list")
        return;
    }
    res.redirect(302, `/edit/${req.body.id}`)
}