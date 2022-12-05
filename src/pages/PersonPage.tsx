import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { PersonCard } from "../components/Person/Person";

export const PersonPage = () => {
  return (
    <div>
      <Header />
      <Main>
        <PersonCard />
      </Main>
    </div>
  );
};
