export type IAlertType = 'info' | 'success' | 'warning' | 'error';

export type IButtonType = IAlertType | 'primary' | 'secondary';

export const alertColors: { [key in IAlertType]: string } = {
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error'
};

export const buttonColors: { [key in IButtonType]: string } = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  warning: 'btn-warning',
  success: 'btn-success',
  info: 'btn-info',
  error: 'btn-error'
};

export type IMarginType = 'sm' | 'md' | 'lg' | 'xl';

export const marginTop: { [key in IMarginType]: string } = {
  sm: 'mt-2',
  md: 'mt-4',
  lg: 'mt-8',
  xl: 'mt-10'
};
