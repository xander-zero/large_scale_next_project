import classNames from 'classnames';
import { ButtonProps, ButtonShape } from './button.types';
import { Size } from '../types/size.type';

const sizeClasses: Record<Size, string> = {
  large: 'btn-lg',
  normal: '',
  small: 'btn-sm',
  tiny: 'btn-xs',
};

const shapeClasses: Record<ButtonShape, string> = {
  default: '',
  wide: 'btn-wide',
  full: 'btn-block',
  square: 'btn-square',
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'normal',
  isDisabled = false,
  isOutline = false,
  shape = 'default',
  isLoading = false,
  loadingType = 'spinner',
  loadingText = 'درحال ارسال درخواست',
  type = 'button',
  isLink = false,
  animatedIcon = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    'btn',
    className,
    { 'btn-outline': isOutline },
    { 'btn-link': isLink },
    { 'animated-icon': animatedIcon },
    { 'pointer-events-none opacity-80': isLoading },
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    { [`${shapeClasses[shape]}`]: shape }
  );

  return (
    <button {...rest} type={type} disabled={isDisabled} className={classes}>
      {isLoading ? loadingText : children}
    </button>
  );
};
