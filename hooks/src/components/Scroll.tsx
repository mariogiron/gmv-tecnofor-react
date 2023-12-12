import { useEffect, useState } from "react";

const Scroll = () => {

    const [currentScroll, setCurrentScroll] = useState(0);

    useEffect(() => {
        function onScroll() {
            console.log('Ejecuta onScroll');
            setCurrentScroll(window.scrollY);
        }
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    });

    return <div style={{ position: 'fixed', backgroundColor: 'red', color: 'black', top: 0 }}>
        ScrollY: {currentScroll}
    </div>
}

export default Scroll;