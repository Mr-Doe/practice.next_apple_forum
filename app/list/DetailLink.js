'use client'

import { useRouter } from "next/navigation"

export default function DetailLink(props) {
    const router = useRouter();

    return (
        <div>
            <h4>{ props.title }</h4>
            <button onClick={ ()=> { router.push(`/detail/${ props.id }`)}}>Move</button>
        </div>
    )
}