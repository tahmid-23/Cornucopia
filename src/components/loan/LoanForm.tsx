"use client";

import { Paper, NumberInput, Button, Stack, Group } from "@mantine/core";
import { FormEvent, useCallback, useState } from "react";

export interface LoanFormProps {
  onCalculate?: (
    principal: number,
    interest: number,
    loanYears: number,
    loanMonths: number,
  ) => void;
}

export default function LoanForm({ onCalculate }: LoanFormProps) {
  const [principal, setPrincipal] = useState<number>();
  const [interest, setInterest] = useState<number>();
  const [loanYears, setLoanYears] = useState<number>();
  const [loanMonths, setLoanMonths] = useState<number>();

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onCalculate?.(principal!, interest!, loanYears!, loanMonths!);
    },
    [interest, loanMonths, loanYears, onCalculate, principal],
  );

  return (
    <Paper
      className="w-fit"
      p="md"
      withBorder
      component="form"
      onSubmit={onSubmit}
    >
      <Stack gap="md">
        <NumberInput
          label="Principal Amount"
          placeholder="$3,000"
          prefix="$"
          allowNegative={false}
          decimalScale={2}
          thousandSeparator=","
          hideControls
          required
          withAsterisk={false}
          value={principal}
          onChange={(newPrincipal) => {
            if (newPrincipal === "") {
              setPrincipal(undefined);
            } else {
              setPrincipal(Number(newPrincipal));
            }
          }}
        />
        <NumberInput
          label="Interest Rate"
          placeholder="8.75%"
          suffix="%"
          allowNegative={false}
          hideControls
          required
          withAsterisk={false}
          value={interest}
          onChange={(newInterest) => {
            if (newInterest === "") {
              setInterest(undefined);
            } else {
              setInterest(Number(newInterest));
            }
          }}
        />
        <Group>
          <NumberInput
            label="Loan Term (years)"
            placeholder="2 years"
            suffix=" years"
            allowNegative={false}
            hideControls
            required
            withAsterisk={false}
            value={loanYears}
            onChange={(newYears) => {
              if (newYears === "") {
                setLoanYears(undefined);
              } else {
                setLoanYears(Number(newYears));
              }
            }}
          />
          <NumberInput
            label="Loan Term (months)"
            placeholder="8 months"
            suffix=" months"
            min={0}
            max={11}
            hideControls
            required
            withAsterisk={false}
            value={loanMonths}
            onChange={(newMonths) => {
              if (newMonths === "") {
                setLoanMonths(undefined);
              } else {
                setLoanMonths(Number(newMonths));
              }
            }}
          />
        </Group>
        <Button type="submit">Calculate</Button>
      </Stack>
    </Paper>
  );
}
