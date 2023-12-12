const paisesYCapitales = [
    { pais: "España", capital: "Madrid" },
    { pais: "Francia", capital: "París" },
    { pais: "Japón", capital: "Tokio" },
    { pais: "Australia", capital: "Canberra" },
    { pais: "Canadá", capital: "Ottawa" }
];

const Listas = () => {

    const items = paisesYCapitales.map((item, index) => {
        return <li key={index}>{item.pais} - {item.capital}</li>
    });

    // return <ul>{items}</ul>;

    return <ul>
        {paisesYCapitales.map(item => (
            <li>{item.pais} - {item.capital}</li>
        ))}
    </ul>

}

export default Listas;