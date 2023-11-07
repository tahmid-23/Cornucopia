import ToolCard from "@/components/ui/ToolCard";
import { Flex, Paper, Stack, Text } from "@mantine/core";

export default function Page() {
  return (
    <Stack>
      <Text size="xl">Welcome to Cornucopia.</Text>
      <Paper>
        <Flex gap="lg" wrap="wrap">
          <ToolCard
            title="Loan Calculator"
            description="Calculate payment information about a potential loan."
            href="/loan"
          />
          <ToolCard
            title="HTTP Tester"
            description="Test HTTP requests."
            href="/http-test"
          />
          <ToolCard
            title="Color Picker"
            description="Choose colors in a variety of formats."
            href="/color"
          />
          <ToolCard
            title="String conversion"
            description="Encode and decode URLs/Base64 and escape JavaScript strings."
            href="/string-convert"
          />
          <ToolCard
            title="String Replacement"
            description="Replace strings in strings to get new strings."
            href="/string-replace"
          />
        </Flex>
      </Paper>
    </Stack>
  );
}
