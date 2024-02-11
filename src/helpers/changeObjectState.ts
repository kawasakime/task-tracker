export const changeObjectState = <T>({
  state,
  field,
  value,
}: {
  state: T;
  field: keyof T;
  value: T[keyof T];
}) => {
  const copy = {...state};
  copy[field] = value;

  return copy;
};
