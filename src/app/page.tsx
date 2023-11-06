import ToolCard from "@/components/ui/ToolCard";
import { Flex, Paper, Stack, Text } from "@mantine/core";

export default function Page() {
  return (
    <Stack>
      <Text size="xl">Welcome to Cornucopia.</Text>
      <Paper>
        <Flex gap="lg" wrap="wrap">
          <ToolCard
            title={"Loan Calculator"}
            description={
              "Calculate payment information about a potential loan."
            }
            href={"/loan"}
          />
          <ToolCard
            title={"URL Encoder/Decoder"}
            description={
              "Encode or decode a URL. Or any string, for that matter."
            }
            href={"/url-encode"}
          />
          <ToolCard
            title={"HTTP Tester"}
            description={"Test HTTP requests."}
            href={"/http-test"}
          />
        </Flex>
      </Paper>
    </Stack>
  );
}
