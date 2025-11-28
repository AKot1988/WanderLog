import type { FormEvent } from "react";
import { imageDestination as imageDestinationConst } from "../../firebase/types";

// InputType через as const
export const InputType = {
  TEXT: "text",
  TEXTAREA: "textarea",
  PASSWORD: "password",
  EMAIL: "email",
  NUMBER: "number",
  DATE: "date",
  DATEPICKER: "datepicker",
  CHECKBOX: "checkbox",
  RADIO: "radio",
  FILE: "file",
  SUBMIT: "submit",
  RESET: "reset",
  BUTTON: "button",
  SELECT: "select",
  HIDDEN: "hidden",
  TIME: "time",
} as const;

export type InputTypeValue = typeof InputType[keyof typeof InputType];

export type SelectOption = {
  label: string;
  value: string;
};

export const FormType = {
  SIGNUP: "signUp",
  LOGIN: "logIn",
} as const;

export type FormTypeValue = typeof FormType[keyof typeof FormType];

export type InputElementProps = {
  id: string;
  type: InputTypeValue;
  placeHolder?: string;
  name: string;
  required?: boolean;
  options?: SelectOption[];
  value?: string | FormTypeValue | Date | number;
  label?: string;
  autoComplete?: string;
  className?: string;
  onFocus?: () => void;
  onChange?: (ev: Event | FormEvent<HTMLInputElement>) => string | undefined | Promise<string | undefined>;
  imagePurpose?: typeof imageDestinationConst[keyof typeof imageDestinationConst];
};