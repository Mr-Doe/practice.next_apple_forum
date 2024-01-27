import DB_URL from "@/utill/dababase"

export default async function Edit(props) {
    const resp = await fetch(`${DB_URL}/posts/${props.params.id}`)
    const data = await resp.json();

    return (
        <div>
            <h4>수정 페이지</h4>
            <form action="/api/post/edit" method="POST">
                <p>
                    <input type="text" name="title" defaultValue={ data.title } />
                </p>
                <p>
                    <input type="text" name="content" defaultValue={ data.content } />
                </p>
                <input type="hidden" name="id" value={ props.params.id } />
                <button type="submit">수정</button>
            </form>
        </div>
    )
}