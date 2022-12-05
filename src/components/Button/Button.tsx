import { ReactNode } from "react";
import { ButtonStyle as StyledButton } from "../../styles/Button";

interface ButtonProps {
  children: ReactNode;
  color?: string;
  onClick?: any;
  type?: any;
  disabled?: boolean;
}

export const PrimaryButton = ({
  color,
  children,
  onClick,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      type={type}
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
