import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
    const resp = await fetch(`http://localhost:3000/api/list`, { cache: 'no-cache' });
    const result = await resp.json();

    return (
        <div className="list-bg">
            { result.map( (m, i) => {
                return (
                    <div className="list-item" key={ i }>
                        <Link prefetch={ false } href={`/detail/${m.id}`}>
                            <h4>{ m.title }</h4>
                        </Link>
                        <Link href={`/edit/${m.id}`}>✏️</Link>
                        <p>1월 1일</p>
                    </div>
                )
            }) }
        </div>
    )
}