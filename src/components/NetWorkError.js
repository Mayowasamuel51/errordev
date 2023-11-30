
import '../css/error.css'
// this is the network .. when the fetch has failled this should show!!!!!!!!!!!!!!!

function NetWorkError(props) {
    return (
        <>

            <div className="error-message">
                <p>{props.errorMessage}</p>
            </div>
            

        </>
    )
}

export default NetWorkError;