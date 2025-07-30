import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
import { ReactNode } from "react";

type OptionType = {
  value: string;
  label: string;
  icon: ReactNode;
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
            <div className="w-1/8">
              <Select
                className="react-select-container"
                classNamePrefix="react-select"
                options={options}
                value={
                  options.find((opt) => opt.value === field.value.value) || null
                }
                onChange={(selected) => {
                  field.onChange({
                    label: selected?.label || "",
                    value: selected?.value || "",
                  });
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: "42px",
                    borderTopLeftRadius: "0.375rem",
                    borderBottomLeftRadius: "0.375rem",
                  }),
                }}
                placeholder={placeholder || ""}
                formatOptionLabel={(e) => (
                  <div className="flex items-center gap-2 justify-center">
                    {e.icon}
                  </div>
                )}
              />
            </div>
            <input
              type="text"
              // placeholder="Enter value"
              className="w-7/8 border border-l-0 border-gray-300 text-sm text-gray-900 rounded-r-md focus:ring-blue-500 focus:border-blue-500 p-2.5"
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
