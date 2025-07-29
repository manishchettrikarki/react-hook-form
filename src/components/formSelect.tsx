import { Controller, get, useFormContext } from "react-hook-form";

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
  const {
    control,
    formState: { errors },
  } = useFormContext();

  //
  const errorMessage = get(errors, name)?.message;

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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={field.value?.value || ""}
                onChange={(e) => {
                  const selectedOption = options.find(
                    (opt) => opt.value === e.target.value
                  );
                  field.onChange(selectedOption || { label: "", value: "" });
                }}
              >
                <option value="">{placeholder || "Select..."}</option>
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm" data-error-for={name}>
          {errorMessage.toString()}
        </p>
      )}
    </div>
  );
}
