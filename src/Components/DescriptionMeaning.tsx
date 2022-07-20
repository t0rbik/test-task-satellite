import { Card, Text } from '@nextui-org/react';
import { Meaning } from '../features/search/apiResponseJSON';

interface MyPropsMeaning {
  meaning: Meaning;
}

export default function DescriptionMeaning(props: MyPropsMeaning) {
  const {
    meaning: { partOfSpeech, definitions, synonyms, antonyms },
  } = props;
  function showSynAnt(list: string[]): JSX.Element[] | null {
    if (list.length > 0) {
      return list.map((each) => <li key={each + Math.floor(Math.random() * 999 + 1)}>{each}</li>);
    }
    return null;
  }
  return (
    <Card variant="bordered" css={{ p: '16px' }}>
      <Text h3>{partOfSpeech}</Text>
      {synonyms.length > 0 && <Text h4>synonyms</Text>}
      {showSynAnt(synonyms)}
      {antonyms.length > 0 && <Text h4>antonyms</Text>}
      {showSynAnt(antonyms)}
      <Text h4>definitions</Text>
      {definitions.map((each) => (
        <Card.Body>
          <Text margin={6} key={each.definition.substring(5, 10)}>
            {each.definition}
          </Text>
        </Card.Body>
      ))}
    </Card>
  );
}
