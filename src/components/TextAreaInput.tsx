import React from "react";

interface TextAreaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function TextAreaInput({ label, error, className = "", ...props }: TextAreaInputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <textarea
        {...props}
        className={`p-2 border border-gray-300 w-full h-24 resize-none max-h-24 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${props.id}-error` : undefined}
      />
      {error && (
        <p
          id={`${props.id}-error`}
          className="text-red-500 text-sm w-full text-center mt-1"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
