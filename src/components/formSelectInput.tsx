import { Controller, useFormContext } from "react-hook-form";

type optionsType = {
  value: string;
  label: string;
};

interface IFormSelectiveInput {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  options: optionsType[];
}
//
export default function FormSelectiveInput(props: IFormSelectiveInput) {
  const { label, name, placeholder, required, options } = props;

  const { register, control } = useFormContext();
  //
  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
        {required && "*"}
      </div>
      <div className="flex border border-gray-300 rounded-md">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <select
              className="bg-gray-50 p-2.5 pr-8 rounded-md text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={field.value?.value || ""}
              onChange={(e) => {
                const selected = options.find(
                  (option) => option.value === e.target.value
                );
                field.onChange(selected);
              }}
            >
              <option value="">{placeholder}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        />
        <input
          className="rounded-md p-2"
          {...register(name)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
