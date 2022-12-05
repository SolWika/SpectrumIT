import { ButtonStyle } from "../../styles/Button";

interface ButtonProps {
  name: string;
  color?: string;
  onClick?: any;
  type?: any;
  disabled?: any;
}

export const Button = ({
  color,
  name,
  onClick,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <ButtonStyle type={type} color={color} onClick={onClick}>
      {name}
    </ButtonStyle>
  );
};
