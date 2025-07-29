import { Controller, useFormContext } from "react-hook-form";

type OptionType = {
  value: string;
  label: string;
};

interface IFormSelectiveInput {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  options: OptionType[];
}

export default function FormSelectiveInput(props: IFormSelectiveInput) {
  const { label, name, placeholder, required, options } = props;
  const { control } = useFormContext();

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-2 text-sm font-medium text-gray-900">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="flex w-full">
            <select
              className="w-1/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 p-2.5"
              value={field.value.label || ""}
              onChange={(e) => {
                const selectedLabel = e.target.value;
                const selectedOption = options.find(
                  (opt) => opt.label === selectedLabel
                );

                field.onChange({
                  label: selectedOption?.label || "",
                  value: selectedOption?.value || "",
                });
              }}
            >
              <option value="">{placeholder || "Select"}</option>
              {options.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Enter value"
              className="w-3/4 border border-l-0 border-gray-300 text-sm text-gray-900 rounded-r-md focus:ring-blue-500 focus:border-blue-500 p-2.5"
              value={field.value.value}
              onChange={(e) =>
                field.onChange({
                  label: field.value.label,
                  value: e.target.value,
                })
              }
            />
          </div>
        )}
      />
    </div>
  );
}
