import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { Box } from "@chakra-ui/react";

export function Home() {
  const onClickAlert = () => {
    alert("おした");
  }
  return (
    <Box backgroundColor={"gray.200"} borderColor={"black"} alignContent={"stretch"}>
      <h1>振り返り</h1>
      <SecondaryButton onClick={onClickAlert}>テスト</SecondaryButton>
    </Box>
  );
}
