"use client";

import { Card, Title, Text } from "@mantine/core";
import Link from "next/link";
import { Url } from "url";

export interface ToolCardProps {
  title: string;
  description: string;
  href: string | Url;
}

export default function ToolCard({ title, description, href }: ToolCardProps) {
  return (
    <Link className="text-inherit no-underline" href={href}>
      <Card className="w-64 h-full" shadow="lg">
        <Card.Section
          style={{
            backgroundColor: "var(--mantine-primary-color-filled)",
          }}
          p="xs"
          withBorder
        >
          <Title order={2}>{title}</Title>
        </Card.Section>
        <Card.Section p="xs">
          <Text>{description}</Text>
        </Card.Section>
      </Card>
    </Link>
  );
}
