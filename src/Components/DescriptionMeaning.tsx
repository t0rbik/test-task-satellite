import { Card, Text } from '@nextui-org/react';
import { Meaning } from '../features/search/apiResponseJSON';

interface MyPropsMeaning {
  meaning: Meaning;
}

const DescriptionMeaning: React.FC<MyPropsMeaning> = (props: MyPropsMeaning) => {
  const partOfSpeech = props.meaning.partOfSpeech;
  const definitions = props.meaning.definitions;
  function showSynAnt(type: string, list: string[]): JSX.Element[] | null {
    if (list.length > 0) {
      return list.map((each, key) => <li key={`${type}-${key}`}>{each}</li>);
    }
    return null;
  }
  return (
    <Card variant="bordered" css={{ p: '16px' }}>
      <Text h4>{partOfSpeech}</Text>
      {props.meaning.synonyms.length > 0 && <Text h4>synonyms</Text>}
      {showSynAnt('synonym', props.meaning.synonyms)}
      {props.meaning.antonyms.length > 0 && <Text h4>antonyms</Text>}
      {showSynAnt('antonym', props.meaning.antonyms)}
      <Text h4>Definitions</Text>
      {definitions.map((each, key) => (
        <Text margin={6} key={`definition${key}`}>
          {each.definition}
        </Text>
      ))}
    </Card>
  );
};

export default DescriptionMeaning;
