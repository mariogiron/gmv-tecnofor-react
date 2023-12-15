// import axios from "axios";
import { useEffect, useState } from "react";
import { Serie } from "../interfaces/Serie";
import customAxios from '../instances/custom-axios';

const SeriesList = () => {

    const [series, setSeries] = useState<Serie[]>([]);

    // useEffect(() => {
    //     axios.get('https://peticiones.online/api/series')
    //         .then(response => setSeries(response.data));
    // }, []);

    useEffect(() => {
        async function getData() {
            try {
                const response = await customAxios.get('/series')
                setSeries(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    useEffect(() => {
        async function createSerie() {
            const body = { title: 'Prueba', creator: 'Mario', rating: 9, channel: 'Antena 3', image: '', dates: '2003-2014' }
            const response = await customAxios.post('/series', body);
            console.log(response.data);
        }
        createSerie();
    }, []);

    return (
        <div>
            <h2>Lista de series</h2>
            <div className="series">
                {series.map(serie => (
                    <div className="serie">
                        <h2>{serie.title}</h2>
                        <small>{serie.creator}</small>
                        <img src={serie.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )

}

export default SeriesList;