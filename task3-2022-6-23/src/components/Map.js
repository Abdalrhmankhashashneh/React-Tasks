
export default function Map() {
    var arr = [5, 2, 9, 65];
    var arr2 = arr.map(
        (value) =>
            value * 2
    )
    return (
        <div>
            <h3> Map Array : </h3><br></br>
            {
                arr2.map(
                    (value) =>
                        <li>{value}</li>
                )
            }
        </div>
    );
}
