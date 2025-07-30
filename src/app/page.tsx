"use client";

import z from "zod";
import { FormProvider, useForm } from "react-hook-form";

import FormInput from "@/components/formInput";
import FormSelect from "@/components/formSelect";
import FormSelectiveInput from "@/components/formSelectInput";
import { zodResolver } from "@hookform/resolvers/zod";
import FormIconSelectInput from "@/components/formIconSelectInput";
import { ReactNode } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Dropdown from "@/components/dropdown";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type optionsType = {
  value: string;
  label: string;
};

type optionIconType = {
  value: string;
  label: ReactNode;
};

interface IReactHookFormExample {
  name: string;
  select: optionsType;
  formSelectInput: optionsType;
  formIconSelect: optionIconType;
}

/**
 *
 */
export default function Homepage() {
  const hookFormSchema = z.object({
    name: z
      .string({ error: "required" })
      .min(1, { message: "Name is required" }),
    select: z.object({
      value: z.string(),
      label: z.string(),
    }),
    formSelectInput: z.object({
      value: z.string(),
      label: z.string(),
    }),
    formIconSelect: z.object({
      value: z.string(),
      label: z.any(),
    }),
  });

  //
  const formMethods = useForm<IReactHookFormExample>({
    resolver: zodResolver(hookFormSchema),
    defaultValues: {
      name: "manish",
      select: { value: "1234567", label: "Category One" },
      formSelectInput: { value: "1234567890", label: "VAT" },
      formIconSelect: { value: "", label: "" },
    },
  });

  const optionsSelect = [
    { value: "1234567", label: "Category One" },
    { value: "7654321", label: "Category Two" },
  ];

  const optionsInputSelect = [
    { value: "1234567890", label: "VAT" },
    { value: "", label: "PAN" },
  ];

  const optionsIconSelect = [
    {
      value: "www.facebook.com",
      label: "FACEBOOK",
      icon: <FaFacebook size={24} />,
    },
    {
      value: "www.instagram.com",
      label: "INSTAGRAM",
      icon: <FaInstagram size={24} />,
    },
  ];
  //
  function onSubmit(data: IReactHookFormExample) {
    console.log(data);
  }

  //
  return (
    <section className="flex justify-center items-center h-screen w-full">
      <div className="border border-gray-300 p-4 w-3/4">
        <FormProvider {...formMethods}>
          <form onSubmit={formMethods.handleSubmit(onSubmit)}>
            <h1 className="font-bold text-4xl text-center">React Hook Form</h1>

            <div className="grid grid-cols-12 py-4 px-8 gap-8">
              <div className="col-span-6">
                <FormInput
                  name="name"
                  label="Full Name"
                  placeholder="Please enter your full name"
                  required
                />
              </div>
              <div className="col-span-6">
                <FormSelect
                  name="select"
                  options={optionsSelect}
                  label="Select something"
                  placeholder="Select something"
                />
              </div>
              <div className="col-span-6">
                <FormSelectiveInput
                  name="formSelectInput"
                  placeholder="Enter a value"
                  label="Form select input"
                  options={optionsInputSelect}
                  required
                />
              </div>
              <div className="col-span-6">
                <FormIconSelectInput
                  name="formIconSelect"
                  // placeholder="Enter a value"
                  label="Form select input"
                  options={optionsIconSelect}
                  required
                />
              </div>
              <div className="col-span-6">
                <Dropdown icon={<MdOutlineKeyboardArrowDown size={24} />} />
              </div>
            </div>
            <hr className="w-full text-gray-300" />
            <div className="pt-6 flex justify-center">
              <button
                className="px-4 py-2 bg-blue-400 rounded-md text-white w-1/4"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
}
