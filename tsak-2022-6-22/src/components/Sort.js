export default function Sort() {
    var arr = ['Z', 'A', 'Q', 'B', 'C', 'Y', 'S', 'W'];
    arr.sort((a, b) => a > b ? 1 : -1);
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
