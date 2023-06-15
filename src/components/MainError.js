import Nav from "../Bulma/Nav";
import { useRouteError } from "react-router-dom";


function MainError() {
    const error = useRouteError()
    let title = 'An error happended';
    let message = 'something is worng ';
    if (error.status === 500) {
        message = error.data.message;
    }
    if (error.status === 404) {
        title = 'NOt found';
        message = 'could not find resource or page '
    }
    return (
        <>
            <Nav />
            {title}
            {message}
            <h1>
                AN ERROR OCCUTRRED
            </h1>



        </>
    )
}


export default MainError;