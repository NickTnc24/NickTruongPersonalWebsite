export default function Whatever({
    params,
}: {
    params: {whatever: string[]};
}) {
    var path = params.whatever.join('/');
    return (
        <div>
            <h1>{path} ain&apos;t a page bro go back</h1>
        </div>
    );
}
