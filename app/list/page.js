import DB_URL from "@/utill/dababase"
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
    const resp = await fetch(`http://localhost:3000/api/list`, { cache: 'no-cache' });
    const result = await resp.json();

    return (
        <div className="list-bg">
            { result.map( (m) => {
                return (
                    <div className="list-item">
                        <DetailLink id={ m.id } title={ m.title } />
                        <p>{ m.content }</p>
                    </div>
                )
            }) }
        </div>
    )
}