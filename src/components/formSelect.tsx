import { Controller, useFormContext } from "react-hook-form";

interface IFormSelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
}
/**
 *
 */
export default function FormSelect(props: IFormSelectProps) {
  const { name, label, options, placeholder } = props;
  const { control } = useFormContext();
  //
  return (
    <div className="flex flex-col">
      <div className="">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
        <div className="w-full rounded-md">
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <select
                className="bg-gray-50 p-2.5 appearance-none pr-8 border border-gray-300 rounded-md text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        </div>
      </div>
    </div>
  );
}
