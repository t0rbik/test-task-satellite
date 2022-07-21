import { Card, Text, Spacer, Link, Container } from '@nextui-org/react';
import { RootObject } from '../features/search/apiResponseJSON';

import Phonetics from './Phonetics';
import DescriptionMeaning from './DescriptionMeaning';

interface MyProps {
  data: RootObject;
}

export default function Description(props: MyProps) {
  const { data } = props;
  return (
    <Container fluid>
      <Phonetics data={data} />
      <div className="descriptions">
        {data.meanings.map((each) => (
          <DescriptionMeaning
            meaning={each}
            key={each.partOfSpeech + Math.floor(Math.random() * 999 + 1)}
          />
        ))}
      </div>
      <Spacer y={1} />
      <Card variant="flat" css={{ p: '16px' }}>
        <Text h4>Sources</Text>
        <ul>
          {data.sourceUrls.map((each, key) => {
            return (
              <li key={each}>
                <Link href={each}>Source {key + 1}</Link>
              </li>
            );
          })}
        </ul>
        <Text h4>License</Text>
        <Link href={data.license.url}>{data.license.name}</Link>
      </Card>
    </Container>
  );
}
