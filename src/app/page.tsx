import { Stack, Text } from "@mantine/core";
import Link from "next/link";

export default function HomePage() {
  return (
    <Stack>
      <Text size="xl">Welcome to Cornucopia.</Text>
      <Text size="xl">
        Check out the <Link href="/loan">loan calculator</Link>.
      </Text>
    </Stack>
  );
}
