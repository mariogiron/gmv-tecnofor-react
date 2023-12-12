import { useEffect, useState } from "react";
import dayjs from "dayjs";

const Reloj = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('INTERVAL');
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return <div>
        <p>{dayjs(currentDate).format('DD-MM-YYYY HH:mm:ss')}</p>
    </div>

}

export default Reloj;