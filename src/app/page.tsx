"use client";

import FormInput from "@/components/formInput";
import FormSelect from "@/components/formSelect";
import FormSelectiveInput from "@/components/formSelectInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";

interface IReactHookFormExample {
  name: string;
  select: { value: string; label: string };
  formSelectInput: string;
}

const hookFormSchema = z.object({
  name: z.string({ error: "required" }).min(1, { message: "Name is required" }),
  select: z.object({ value: z.string(), label: z.string() }),
  formSelectInput: z.string(),
});

/**
 *
 */
export default function Homepage() {
  const formMethods = useForm<IReactHookFormExample>({
    resolver: zodResolver(hookFormSchema),
    defaultValues: {
      name: "",
      select: { value: "", label: "" },
      formSelectInput: "",
    },
  });

  const options = [
    { value: "1234", label: "FACEBOOK" },
    { value: "5678", label: "FISCAL CODE" },
  ];
  //
  function onSubmit(data: IReactHookFormExample) {
    console.log(data);
  }

  //
  return (
    <div className="flex justify-center items-center h-screen w-full">
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
                  options={options}
                  label="Select something"
                  placeholder="Select something"
                />
              </div>
              <div className="col-span-6">
                <FormSelectiveInput
                  name="formSelectInput"
                  placeholder="Enter a value"
                  label="Form select input"
                  options={options}
                  required
                />
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
    </div>
  );
}
