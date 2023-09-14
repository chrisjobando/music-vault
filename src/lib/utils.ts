export const success = <T extends Record<string, unknown> | undefined>(
  message: string,
  data?: T
) => ({
  success: true,
  message,
  ...data
});

export const fault = <T extends Record<string, unknown> | undefined>(
  message: string,
  data?: T
) => ({
  success: false,
  message,
  ...data
});
