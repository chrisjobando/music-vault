export type IAlertType = 'info' | 'success' | 'warning' | 'error';

export type IButtonType = IAlertType | 'primary' | 'secondary';

export const alertColors: { [key in IAlertType]: string } = {
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error'
};

export type IMarginType = 'sm' | 'md' | 'lg' | 'xl';
