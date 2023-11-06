"use client";

import {
  Button,
  Group,
  NativeSelect,
  Paper,
  Stack,
  TextInput,
  Textarea,
} from "@mantine/core";
import { FormEvent, useState } from "react";

export interface HttpTestFormProps {
  onTest?: (
    url: string,
    method: string,
    headers: Record<string, string>,
    body: string,
    contentType: string,
  ) => void;
}

export default function HttpTestForm({ onTest }: HttpTestFormProps) {
  const [url, setURL] = useState("");
  const [method, setMethod] = useState("GET");
  const [headers, setHeaders] = useState("");
  const [headersValid, setHeadersValid] = useState(true);
  const [body, setBody] = useState("");
  const [contentType, setContentType] = useState("application/json");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsedHeaders: Record<string, string> = {};
    if (headers !== "") {
      for (const line of headers.split("\n")) {
        console.log(line);
        const match = line.match("(.*):(.*)");
        if (!match) {
          setHeadersValid(false);
          return;
        }

        parsedHeaders[match[0]] = match[1];
      }
    }

    setHeadersValid(true);
    onTest?.(url, method, parsedHeaders, body, contentType);
  };

  const headersError = headersValid ? undefined : "Invalid headers format.";

  return (
    <Paper
      className="w-80"
      p="md"
      withBorder
      component="form"
      onSubmit={onSubmit}
    >
      <Stack gap="md">
        <Group>
          <TextInput
            label="URL"
            placeholder="https://google.com/"
            required
            withAsterisk={false}
            type="url"
            value={url}
            onChange={(e) => setURL(e.currentTarget.value)}
          />
          <NativeSelect
            className="w-fit"
            label="Method"
            data={["GET", "POST"]}
            value={method}
            onChange={(e) => setMethod(e.currentTarget.value)}
          />
        </Group>
        <Textarea
          label="Headers"
          autosize
          minRows={4}
          error={headersError}
          value={headers}
          onChange={(e) => setHeaders(e.currentTarget.value)}
        />
        <Textarea
          label="Body"
          autosize
          minRows={4}
          value={body}
          onChange={(e) => setBody(e.currentTarget.value)}
        />
        <NativeSelect
          label="Content Type"
          data={["application/json", "application/x-www-form-urlencoded"]}
          disabled={body === ""}
          value={contentType}
          onChange={(e) => setContentType(e.currentTarget.value)}
        />
        <Button type="submit">Send Request</Button>
      </Stack>
    </Paper>
  );
}
