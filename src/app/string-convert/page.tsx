"use client";

import ToolBase from "@/components/tool/ToolBase";
import {
  Paper,
  Stack,
  Textarea,
  Group,
  Button,
  NativeSelect,
} from "@mantine/core";
import { useState } from "react";

function escapeString(input: string) {
  return input.replace(/[\\'"]/g, "\\$&").replaceAll("\n", "\\n");
}

function unescapeString(input: string) {
  return input.replace(/(?<!\\)\\n/g, "\n").replace(/\\([\\'"])/g, "$1");
}

function getEncodeKeyword(conversionType: string) {
  switch (conversionType) {
    case "URL":
    case "Base64":
      return "Encode";
    case "JavaScript":
      return "Escape";
    default:
      return "Encode";
  }
}

function getEncodeFunction(conversionType: string) {
  switch (conversionType) {
    case "URL":
      return encodeURIComponent;
    case "Base64":
      return btoa;
    case "JavaScript":
      return escapeString;
    default:
      return (input: string) => input;
  }
}

function getDecodeKeyword(conversionType: string) {
  switch (conversionType) {
    case "URL":
    case "Base64":
      return "Decode";
    case "JavaScript":
      return "Unescape";
    default:
      return "Decode";
  }
}

function getDecodeFunction(conversionType: string) {
  switch (conversionType) {
    case "URL":
      return decodeURIComponent;
    case "Base64":
      return atob;
    case "JavaScript":
      return unescapeString;
    default:
      return (input: string) => input;
  }
}

export default function Page() {
  const [input, setInput] = useState("");
  const [conversionType, setConversionType] = useState("URL");

  return (
    <ToolBase title="String Conversion">
      <Paper className="w-80">
        <Stack gap="sm">
          <Textarea
            label="Input text"
            autosize
            minRows={4}
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <NativeSelect
            className="w-fit"
            label="Conversion Type"
            data={[
              { label: "URL Encode/Decode", value: "URL" },
              { label: "Base64 Encode/Decode", value: "Base64" },
              { label: "JavaScript Escape", value: "JavaScript" },
            ]}
            value={conversionType}
            onChange={(e) => setConversionType(e.currentTarget.value)}
          />
          <Group>
            <Button onClick={() => setInput(getEncodeFunction(conversionType))}>
              {getEncodeKeyword(conversionType)}
            </Button>
            <Button onClick={() => setInput(getDecodeFunction(conversionType))}>
              {getDecodeKeyword(conversionType)}
            </Button>
          </Group>
        </Stack>
      </Paper>
    </ToolBase>
  );
}
