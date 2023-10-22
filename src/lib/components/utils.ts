export type IAlertType = 'success' | 'info' | 'warning';
export type IButtonType = IAlertType | 'primary' | 'secondary';

export const themeColors: { [key in IButtonType]: string } = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  success: 'bg-success',
  info: 'bg-info',
  warning: 'bg-warning'
};
