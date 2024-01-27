export default function Write() {
    return (
        <div>
            <h4>글 작성</h4>
            <form action="/api/post/new" method="POST">
                <p>
                    <input type="text" name="title" placeholder="title" />
                </p>
                <p>
                    <input type="text" name="content" placeholder="contents" />
                </p>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}