export const requiredValidation = {
  required: 'Field is required.',
};

export const requiredAndEmptySpacesValidation = {
  required: requiredValidation.required,
  validate: (value: string) =>
    value.trim() !== '' || 'This field cannot be empty spaces',
};
