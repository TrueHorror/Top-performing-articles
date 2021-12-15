import React, { Dispatch, SetStateAction } from "react";
import { BackgroundShade } from "./styles/BackgroundShade.styled";
import { ModalBody } from "./styles/ModalBody.styled";
import { ModalContainer } from "./styles/ModalContainer.styled";
import { ModalHead } from "./styles/ModalHead.styled";
import CloseIcon from "@material-ui/icons/Close";
import ModalInputs from "./ModalInputs";

const Modal = (props: {
  displayModal: boolean;
  setDisplayModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <BackgroundShade>
      <ModalContainer>
        <ModalHead>
          Hello Modal
          <CloseIcon
            className="icon"
            onClick={() => props.setDisplayModal(!props.displayModal)}
          />
        </ModalHead>
        <ModalBody>
          <ModalInputs
            displayModal={props.displayModal}
            setDisplayModal={props.setDisplayModal}
          />
        </ModalBody>
      </ModalContainer>
    </BackgroundShade>
  );
};

export default Modal;
