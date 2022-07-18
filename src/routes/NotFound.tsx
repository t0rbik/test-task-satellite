import { useNavigate } from "react-router-dom"

export default function NotFound() {
    let navigate = useNavigate();
    return (
        <div className='defaultBar'>
            <h2>Your word is not found. Try again.</h2>
            <button type="button" onClick={()=> {navigate(-1)}}>Go back</button>
        </div>
    )
}