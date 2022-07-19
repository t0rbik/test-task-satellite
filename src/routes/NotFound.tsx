import { useNavigate } from "react-router-dom"
import { Text, Button } from "@nextui-org/react";

export default function NotFound() {
    let navigate = useNavigate();
    return (
        <div className='defaultBar'>
            <Text h2>Your word is not found. Try again.</Text>
            <Button size="lg" auto light color="secondary" onClick={()=> {navigate(-1)}}>Go back</Button>
        </div>
    )
}