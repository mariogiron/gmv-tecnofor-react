import { ChangeEvent, useMemo, useState, memo, useCallback } from "react";

type ListaProps = {
    items: string[],
    onItemClicked: (item: string) => void
};

const Lista = memo(({ items, onItemClicked }: ListaProps) => {

    let startTime = performance.now();
    while (performance.now() - startTime < 1000) { }

    return (
        <ul>
            {items.map(item => (
                <li onClick={() => onItemClicked(item)}>{item}</li>
            ))}
        </ul>
    )
})

const ListaAnimales = () => {

    const [search, setSearch] = useState('');
    const [active, setActive] = useState(true);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value);
    }

    // Función compleja
    const animals = useMemo(() => {
        let animals = ['perro', 'gato', 'loro', 'oso'];
        return animals.filter(item => item.includes(search));
    }, [search]);

    const handleItemClicked = useCallback((item: string) => {
        console.log(item);
    }, []);

    return (
        <div>
            <h2>Lista de animales</h2>
            <button onClick={() => setActive(!active)}>
                Cambia Active ({active ? 'TRUE' : 'FALSE'})
            </button>
            <input type="text" onChange={handleChange} />
            <Lista items={animals} onItemClicked={handleItemClicked} />
        </div>
    );

}

export default ListaAnimales;