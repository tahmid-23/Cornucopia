import { HttpTestAPIResponse } from "@/app/api/http-test/http-test-api-response";
import { Group, Paper, ScrollArea, Stack, Text } from "@mantine/core";

export interface HttpTestOutputProps {
  loading: boolean;
  error?: string;
  json?: HttpTestAPIResponse;
}

export default function HttpTestOutput({
  loading,
  error,
  json,
}: HttpTestOutputProps) {
  let content = undefined;
  if (loading) {
    content = <Text>Loading...</Text>;
  } else if (error) {
    content = <Text c="red">{error}</Text>;
  } else if (json) {
    let headerText = [];
    for (const headerName in json.headers) {
      headerText.push(
        <Text>
          {headerName}: {json.headers[headerName]}
        </Text>,
      );
    }

    content = (
      <Stack>
        <Group gap="xs">
          <Text size="lg">Status:</Text>
          <Text size="lg" c={json.status === 200 ? "green" : "red"}>
            {json.status}
          </Text>
        </Group>
        <div>
          <Text size="lg">Headers:</Text>
          <ScrollArea className="h-40">{headerText}</ScrollArea>
        </div>
        {json.body && (
          <div>
            <Text size="lg">Body:</Text>
            <ScrollArea className="h-40">{json.body}</ScrollArea>
          </div>
        )}
      </Stack>
    );
  }

  return (
    <Paper className="w-80" px="1rem" py="md" withBorder>
      <Text size="xl">Output:</Text>
      {content}
    </Paper>
  );
}
