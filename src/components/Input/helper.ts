export const InputType = {
  TEXT: 'text',
  PASSWORD: 'password',
  EMAIL: 'email',
  NUMBER: 'number',
  DATE: 'date',
  SEARCH: 'search',
  TEL: 'tel',
  URL: 'url',
} as const;

export type InputType = (typeof InputType)[keyof typeof InputType];

export type CustomInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type: InputType;
};
