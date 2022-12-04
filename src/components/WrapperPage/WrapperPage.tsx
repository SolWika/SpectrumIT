import { useState } from "react";

import { WrapperPage } from "../../styles/WrapperPage";

import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { PersonCard } from "../Person/Person";
import { Modal } from "../Modal/Modal";

export const Wrapper = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <WrapperPage>
      <Header onClick={openModal} />

      <Main>
        <PersonCard />
      </Main>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </WrapperPage>
  );
};
