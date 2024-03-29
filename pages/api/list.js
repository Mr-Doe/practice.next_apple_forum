import DB_URL from "@/utill/dababase";

export default async function Hnadler(req, res) {
    if(req.method == "GET") {
        const resp = await fetch(`${DB_URL}/posts`, { cache: 'no-cache' });
        const result = await resp.json();
    
        return res.status(200).json(result);
    }
}