import { Container, Text } from '@nextui-org/react';
import { RootObject } from '../features/search/apiResponseJSON';

interface MyProps {
  data: RootObject;
}

export default function Phonetics(props: MyProps) {
  const { data } = props;
  return (
    <Container fluid>
      <Text h2>Phonetics of the word</Text>
      {data.phonetic && <Text>General transcription: {data.phonetic}</Text>}
      <Text h3>Learn pronunciation</Text>
      {data.phonetics.map((each) => {
        return (
          <div key={each.text + Math.floor(Math.random() * 999 + 1)}>
            {each.text && <Text>{each.text}</Text>}
            {/* eslint-disable jsx-a11y/media-has-caption */}
            {each.audio && <audio src={each.audio} controls />}
            {/* eslint-enable jsx-a11y/media-has-caption */}
          </div>
        );
      })}
    </Container>
  );
}
