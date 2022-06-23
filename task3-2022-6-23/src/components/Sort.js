export default function Sort() {
    var arr = [5, 2, 9, 65];
    arr.sort((a, b) => a - b);
    return (
        <div>
            <h3> Sort Array : </h3><br></br>
            {
                arr.map(
                    (value) =>
                        <li>{value}</li>
                )
            }
        </div>
    );
}
