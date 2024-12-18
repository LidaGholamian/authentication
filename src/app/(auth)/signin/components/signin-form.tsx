"use client";

import { useForm } from "react-hook-form";
import { Signin } from "../types/signin.types";

import { Button } from "@/button";
import TextInput from "@/form-input/text-input/text-input";

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
        <TextInput<Signin>
          register={register}
          name={"mobile"}
          rules={{
            required: "شماره موبایل الزامی است",
            maxLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد",
            },
            minLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد",
            },
          }}
          errors={errors}
        />
        <Button
          type="submit"
          variant="primary"
          className="dark:bg-blue bg-blue rounded-md dark:text-white p-2"
          size="large"
        >
          تایید و دریافت کد
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
