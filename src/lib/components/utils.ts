export type IAlertType = 'info' | 'success' | 'warning' | 'error';
export type IButtonType = IAlertType | 'primary' | 'secondary';

export const buttonColors: { [key in IButtonType]: string } = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  warning: 'btn-warning',
  success: 'btn-success',
  info: 'btn-info',
  error: 'btn-danger'
};
