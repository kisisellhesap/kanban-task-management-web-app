import React, { FormEvent } from "react";

const Form = ({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form
      className="rounded-md p-8 bg-White dark:bg-DarkGrey flex flex-col gap-6 shadow-custom-light shadow-custom-dark"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
