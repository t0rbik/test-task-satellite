import { Card, Text, Spacer, Link } from "@nextui-org/react";
import { RootObject } from "../features/search/apiResponseJSON";

import DescriptionMeaning from "./DescriptionMeaning"

interface myPropsDescription {
    data: RootObject
}

const Description: React.FC<myPropsDescription> = (props: myPropsDescription) => {
    let data = props.data
    return (
        <div style={{minWidth: "280px"}}>
            <Text h3>Phonetics of the word</Text>
            <Text>Transcription: {data.phonetic}</Text>
            <Text h3>Learn pronunciation</Text>
            <Text>{data.phonetics[1].text}</Text>
            <audio src={data.phonetics[1].audio} controls/>
            {data.meanings.map((each, key) => (<DescriptionMeaning meaning={each} key={'meaning-'+key}/>))}
            <Spacer y={1} />
            <Card variant="flat" css={{p: "16px"}}>
                <Text h4>Sources</Text>
                <ul>{data.sourceUrls.map((each, key) => {return (<li key={'src-link-'+key}><Link href={each}>Source {key+1}</Link></li>)})}</ul>
            </Card>
            <Spacer y={1} />
            <Card variant="flat" css={{p: "16px"}}>
                <Text h4>License</Text>
                <Link href={data.license.url}>{data.license.name}</Link>
            </Card>
        </div>
    )
}

export default Description
