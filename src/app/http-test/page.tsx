"use client";

import ToolBase from "@/components/tool/ToolBase";
import { Flex } from "@mantine/core";
import { useState, useCallback } from "react";
import HttpTestForm from "./HttpTestForm";
import HttpTestOutput from "./HttpTestOutput";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [json, setJson] = useState();
  const [error, setError] = useState<string>();

  const onTest = useCallback(
    async (
      url: string,
      method: string,
      headers: Record<string, string>,
      body: string,
      contentType: string,
    ) => {
      setLoading(true);
      setJson(undefined);
      setError(undefined);

      try {
        const res = await fetch("/api/http-test", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: url,
            method: method,
            headers: headers,
            body: body,
            contentType: contentType,
          }),
        });

        if (res.status !== 200) {
          setError("A server error occurred.");
          return;
        }

        const json = await res.json();
        setJson(json);
      } catch (err: any) {
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return (
    <ToolBase title={"HTTP Request Tester"}>
      <Flex gap="lg">
        <HttpTestForm onTest={onTest} />
        <HttpTestOutput loading={loading} error={error} json={json} />
      </Flex>
    </ToolBase>
  );
}
