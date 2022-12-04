import { FormCard } from "../Form/Form";
import {
  Background,
  ModalWrapper,
  CloseModalButton,
  ModalContent,
} from "./Modal.style";

interface ModalProps {
  showModal?: boolean;
  setShowModal?: any;
}
export const Modal = ({ showModal, setShowModal }: ModalProps) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper>
            <ModalContent>
              <FormCard />
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev: any) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
