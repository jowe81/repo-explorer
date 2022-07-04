import { Button, ButtonGroup } from 'react-bootstrap';

const getLanguages = (repoData: any[]) => {
  const languages = new Set();
  repoData.forEach((record) => {
    languages.add(record.language);
  });
  return Array.from(languages);
};

export default function FilterButtons(props: any) {
  const languages = getLanguages(props.repoData);
  const buttons = languages.map((language: any, index: number) => {
    return (
      <Button key={index} onClick={() => props.setFilterLanguage(language)}>
        {language}
      </Button>
    );
  });

  return (
    <ButtonGroup>
      <Button onClick={() => props.setFilterLanguage(undefined)}>All</Button>
      {buttons}
    </ButtonGroup>
  );
}
