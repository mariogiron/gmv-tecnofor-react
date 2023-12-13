import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    let errorMessage: string = ''

    if (isRouteErrorResponse(error)) {
        // error is type `ErrorResponse`
        errorMessage = error.data || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }

    return (
        <div>
            <h1>Error</h1>
            <h2>{errorMessage}</h2>
        </div>
    )
}

export default ErrorPage;