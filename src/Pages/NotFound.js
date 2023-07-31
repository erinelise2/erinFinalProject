import {Link} from 'react-router-dom'

export default function NotFound() {
    return (
        <>
        <div className="form-container border border-white border-3">
            <h1 className="mt-4 pe-2 ps-2 fw-bold">Oops! Page Not Found.</h1>
            <p className="text-white fs-4 ps-2 pe-2 fw-bold mb-4">But that is okay, please click on the button below to return to the application.</p>
        <div className="text-center mt-2 mb-4">
        <Link className="link text-white border border-2 p-2 rounded" to="/">Return Home</Link>
        </div>
        </div>

        </>
    )
}