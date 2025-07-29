import clsx from "clsx";
import { get, useFormContext } from "react-hook-form";

//
interface IFormSelectInput {
  name: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

/**
 *
 */
export default function FormInput(props: IFormSelectInput) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { name, label, required, disabled, placeholder } = props;
  const errorMessage = get(errors, name)?.message;

  //
  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
        {required && "*"}
      </div>
      <div
        className={clsx(
          "w-full rounded-md",
          disabled && "bg-gray-200 cursor-default rounded-md"
        )}
      >
        <input
          className="bg-gray-50 border border-gray-300 rounded-md text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          disabled={disabled}
          placeholder={placeholder}
          {...register(name)}
        />
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm" data-error-for={name}>
          {errorMessage.toString()}
        </p>
      )}
    </div>
  );
}
