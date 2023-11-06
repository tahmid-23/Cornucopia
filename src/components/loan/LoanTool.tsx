"use client";

import { Flex, Stack, Text, Title } from "@mantine/core";
import LoanForm from "./LoanForm";
import LoanResult from "./LoanResult";
import { useCallback, useState } from "react";

export default function LoanTool() {
  const [total, setTotal] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const adjustResult = useCallback(
    (
      principal: number,
      interest: number,
      loanYears: number,
      loanMonths: number,
    ) => {
      const monthlyRate = Math.pow(1 + interest / (100 * 365), 30);
      const totalMonths = 12 * loanYears + loanMonths;
      const tempValue = Math.pow(monthlyRate, totalMonths);
      const newMonthlyPayment =
        (principal * tempValue * (1 - monthlyRate)) / (1 - tempValue);

      setTotal(newMonthlyPayment * totalMonths);
      setMonthlyPayment(newMonthlyPayment);
    },
    [],
  );

  return (
    <Stack gap="lg">
      <Title order={1}>Loan Calculator</Title>
      <Flex gap="lg">
        <LoanForm onCalculate={adjustResult} />
        <LoanResult total={total} monthlyPayment={monthlyPayment} />
      </Flex>
    </Stack>
  );
}
