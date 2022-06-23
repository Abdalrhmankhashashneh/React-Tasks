export default function Filter() {
    var arr = [5, 2, 9, 65];
    var arr2 = arr.filter((num) => num < 20);

    return (

        <div>
            <h3> Fillter Array : </h3><br></br>
            {
                arr2.map(
                    (value) =>
                        <li>{value}</li>
                )
            }
        </div>
    );
}
