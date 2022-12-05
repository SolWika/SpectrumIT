import { useEffect, useState } from "react";
import { Picture, Section, DataWrapper } from "./Person.style";
import { PrimaryButton } from "../Button/Button";

interface PersonData {
  name: string;
  eye_color: string;
  birth_year: string;
  id: number | undefined;
}

export const PersonCard = () => {
  const [person, setPerson] = useState<PersonData>();
  const [changePicture, setChangePicture] = useState<any>(
    "https://picsum.photos/534/383"
  );
  const [id, setId] = useState<number>(1);

  useEffect(() => {
    fetch(`https://swapi.py4e.com/api/people/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((person) => setPerson(person))
      .then(() => setChangePicture(`https://picsum.photos/id/${id}/534/383`))
      .catch((error) => console.error(error));
  }, [id]);

  const handleClick = () => {
    setId(id + 1);
  };

  return (
    <>
      <Section>
        <Picture src={changePicture} alt="losowy obrazek" />
        <DataWrapper>
          <h1>{person?.name}</h1>
          <p>age: {person?.birth_year} </p>
          <p>eye color: {person?.eye_color}</p>
        </DataWrapper>
      </Section>
      <PrimaryButton onClick={handleClick} color="rgba(53, 102, 14, 1)">
        next profiles
      </PrimaryButton>
    </>
  );
};
