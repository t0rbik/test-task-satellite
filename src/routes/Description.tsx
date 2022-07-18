import { RootObject } from "../features/search/apiResponseJSON";

interface myProps {
    data: RootObject
}

const Description: React.FC<myProps> = (props: myProps) => {
    let data = props.data
    return (
        <div>
            <h2>{data.word}</h2>
            <h4>{data.phonetic}</h4>
            <p>{data.phonetics[1].text}</p>
            <audio src={data.phonetics[1].audio} controls/>
            <section>
                <h4>Sources</h4>
                {data.sourceUrls.map((each, key) => {return (<a key={key} href={each}>Source {key}</a>)})}
            </section>
            <div>
                <p>{data.license.name}</p>
                <a href={data.license.url}>.license</a>
            </div>
        </div>
    )
}

export default Description
