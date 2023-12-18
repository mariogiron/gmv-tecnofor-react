import { useRef } from "react";
import useWebSocket from "react-use-websocket";

interface Report {
    user: any,
    text: string
}

type WSResponse = { users: any[], reports: Report[] };

const NewReport = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const { sendJsonMessage, lastJsonMessage } = useWebSocket<WSResponse>('ws://wsserver.ngrok.io', {
        share: true,
        queryParams: { username: 'mario' }
    });

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={() => sendJsonMessage(inputRef.current!.value)}>Envía</button>
            {lastJsonMessage?.reports.map(report => (
                <p>{report.text}</p>
            ))}
        </div>
    )

}

export default NewReport;