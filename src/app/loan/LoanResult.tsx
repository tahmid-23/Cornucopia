import { Paper, Stack, Text } from "@mantine/core";

export interface LoanResultProps {
  total: number;
  monthlyPayment: number;
}

export default function LoanResult({ total, monthlyPayment }: LoanResultProps) {
  return (
    <Paper px="4rem" py="md" withBorder>
      <Stack gap="lg">
        <div>
          <Text ta="center" size="xl">
            Loan Total:
          </Text>
          <Text ta="center" size="lg">
            ${total.toFixed(2)}
          </Text>
        </div>
        <div>
          <Text ta="center" size="xl">
            Monthly Payment:
          </Text>
          <Text ta="center" size="lg">
            ${monthlyPayment.toFixed(2)}
          </Text>
        </div>
      </Stack>
    </Paper>
  );
}
