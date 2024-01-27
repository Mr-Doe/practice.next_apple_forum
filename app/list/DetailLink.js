'use client'

import { useParams, usePathname, useRouter } from "next/navigation"

export default function DetailLink(props) {
    const router = useRouter();

    return (
        <div>
            <button onClick={ ()=> { router.push(`/detail/${ props.id }`)}}>Move</button>
        </div>
    )
}