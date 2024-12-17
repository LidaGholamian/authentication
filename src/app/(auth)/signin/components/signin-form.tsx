"use client";

import { useForm } from "react-hook-form";
import { Signin } from "../types/signin.types";
import { Textbox } from "@/textbox";
import { Button } from "@/button";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Signin>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <h5 className="text-2xl">ورود | ثبت نام</h5>
      <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
      <form
        className="flex flex-col gap-6 mt-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Textbox
          {...register("mobile", {
            required: "شماره موبایل الزامی است",
          })}
          placeholder="شماره موبایل"
        />
        <Button
          type="submit"
          variant="primary"
          className="dark:bg-blue rounded-md dark:text-white p-2"
          size="large"
        >
          تایید و دریافت کد
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
