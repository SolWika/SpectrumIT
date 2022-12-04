import { ButtonStyle } from "../../styles/Button";

interface ButtonProps {
  name: string;
  color?: string;
  onClick?: any;
  type?: string;
}

export const Button = ({ color, name, onClick, type }: ButtonProps) => {
  return (
    <ButtonStyle type="button" color={color} onClick={onClick}>
      {name}
    </ButtonStyle>
  );
};
