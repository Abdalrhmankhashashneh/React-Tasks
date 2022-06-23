
export default function Map() {
    const Fruits = [
        { id: 1, name: "Apple", color: "Yellow" },
        { id: 2, name: "Strawberry", color: "Red" },
        { id: 3, name: "Kiwi", color: "Green" }
    ];


    return (
        <div>
            <h3> Map Array : </h3><br></br>
            <table border={3}>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>color</th>
                </tr>
                {
                    Fruits.map(
                        (fruit) =>
                            <tr>
                                <td>
                                    {fruit.id}
                                </td>
                                <td>
                                    {fruit.name}
                                </td>
                                <td>
                                    {fruit.color}
                                </td>
                            </tr>


                    )
                } </table>
        </div >
    );
}
