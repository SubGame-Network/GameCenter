import React, { useMemo } from "react";
import Select from "../Select";
export function SelectColumnFilter(
  { column: { setFilter, preFilteredRows, id, filterValue } }: any,
  options: string[] = []
) {
  const all = useMemo(
    () => ({
      value: "",
      label: "All",
    }),
    []
  );

  const defaultOptions = useMemo(() => {
    if (options?.length > 0) return options;

    const tmpOptions: string[] = [];
    preFilteredRows.forEach((row: any) => {
      if (tmpOptions.findIndex((elm) => elm === row.values[id]) === -1) {
        tmpOptions.push(row.values[id]);
      }
    });

    return [...tmpOptions];
  }, [id, preFilteredRows, options]);

  const selectOption = useMemo(
    () =>
      defaultOptions.map((option: string) => {
        return { value: option, label: option };
      }),
    [defaultOptions]
  );

  selectOption.unshift(all);

  return (
    <Select
      options={selectOption}
      defaultValue={all}
      onChange={(e: any) => setFilter(e.value)}
    />
  );
}
