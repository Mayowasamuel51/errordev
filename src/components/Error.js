import Nav from "../Bulma/Nav";
import { useRouteError } from "react-router-dom";

function Error() {
    const error = useRouteError()
    let title = 'An error happended';
    let message = 'something is worng with the request ';
    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }
    if (error.status === 404) {
        title = 'NOt found';
        message = 'could not find resource or page '
    }
    return (
        <>
            <Nav />

            {message}
          

        </>
    )
}

export default Error;