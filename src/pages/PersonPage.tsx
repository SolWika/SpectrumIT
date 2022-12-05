import { useState } from "react";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Modal } from "../components/Modal/Modal";
import { PersonCard } from "../components/Person/Person";

export const PersonPage = ({ children }: any) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <Header />
      {/* onClick={openModal} */}
      <Main>
        <PersonCard />
      </Main>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};
