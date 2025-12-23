import type { FC } from "react";
import { Form } from "react-router-dom";
import type { FormProps } from "./types.tsx";
import { Input } from '../';
import classes from "./UniversalForm.module.scss";

const UniversalForm: FC<FormProps> = ({ ...data }) => {
  return (
    <Form className={classes.form} method={data.method} action={data.action}>
      <p className={classes.formTitle}>{data.title}</p>
      {data.inputs.map((input) => (
        <Input {...input} key={input.id} />
      ))}
      <button className={classes.formButton} type="submit" onClick={data.button.clickHandler}>
        {data.button.text}
      </button>
    </Form>
  );
};

export default UniversalForm;
