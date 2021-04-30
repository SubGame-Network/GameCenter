import React from "react";
import isToday from "date-fns/isToday";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import format from "date-fns/format";
import isValid from "date-fns/isValid";
import { FormattedNumber } from "react-intl";
const formatTime = (value: any) => {
  const date = new Date(value);

  return isValid(date)
    ? isToday(date)
      ? formatDistanceToNow(date)
      : format(date, "yyyy-MM-dd HH:mm:ss")
    : value;
};

const formatNumber = (value: string | number, SGB?: boolean) => {
  const number = typeof value === "string" ? parseFloat(value) : value;
  return isNaN(number) ? (
    "-"
  ) : (
    <FormattedNumber
      minimumFractionDigits={SGB ? 4 : 0}
      maximumFractionDigits={SGB ? 4 : 0}
      value={number}
    />
  );
};

export { formatTime, formatNumber };
