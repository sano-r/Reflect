import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type CustomButtonProps = ButtonProps & {
    children: ReactNode;
    fontSize?: "sm" | "md" | "lg"; // 使いやすいように Chakra UI のサイズに限定
  };

export const SecondaryButton = ({
  children,
  fontSize = "lg",
    ...props
}: CustomButtonProps) => {
  return (
    <Button fontSize={fontSize} color={"white"} bg={"#68c1d5"} _hover={{opacity:0.8}} {...props}>
      {children}
    </Button>
  );
};