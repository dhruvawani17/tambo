"use client";

import { InputFields } from "@/components/tambo/input-fields";

export function UserRegistrationFields() {
  return (
    <InputFields
      title="Create Account"
      fields={[
        {
          name: "username",
          label: "Username",
          type: "text",
          required: true,
          placeholder: "Enter username",
          minLength: 3,
          maxLength: 20,
          pattern: "^[a-zA-Z0-9]+$",
          description: "Must be 3-20 alphanumeric characters",
          autoComplete: "username",
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
          placeholder: "your.email@example.com",
          description: "We'll use this for account notifications",
          autoComplete: "email",
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Create strong password",
          minLength: 8,
          maxLength: 128,
          description: "Must be at least 8 characters long",
          autoComplete: "new-password",
        },
        {
          name: "phone",
          label: "Phone",
          type: "text",
          placeholder: "(555) 123-4567",
          pattern: "^\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}$",
          description: "Optional: for account recovery",
          autoComplete: "tel",
        },
        {
          name: "age",
          label: "Age",
          type: "number",
          placeholder: "25",
          minLength: 1,
          maxLength: 3,
          description: "Must be between 1-150",
        },
      ]}
      variant="solid"
      layout="compact"
    />
  );
}
