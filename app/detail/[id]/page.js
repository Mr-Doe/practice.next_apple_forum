import DB_URL from "@/utill/dababase"

export default async function Detail(props) {
    const resp = await fetch(`${DB_URL}/posts/${props.params.id}`)
    const data = await resp.json();

    return (
        <div>
            <h4>상세 페이지</h4>
            <h4>{ data.title }</h4>
            <p>{ data.content }</p>
        </div>
    )
}