const {useRouteError} = require('react-router-dom');

const Error = ()=>{
    const error = useRouteError();
    return(
        <div>
            <h1>Oops!</h1>
            <h2>404 Page Not Found</h2>
            <h3>{error.status}: {error.statusText}</h3>
        </div>
    )
}

export default Error;