import React from 'react'
import classNames from 'classnames';
type ButtonProps = {
  title: string;
  variant?: 'solid' | 'outline';
  color?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
};
const variantClass = {
  solid: {
    primary: 'bg-purple-700 text-white hover:bg-purple-800',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
  },
  outline: {
    primary: 'border border-purple-700 text-purple-700 hover:bg-purple-100',
    secondary: 'border border-gray-600 text-gray-600 hover:bg-gray-100',
    danger: 'border border-red-600 text-red-600 hover:bg-red-100',
    success: 'border border-green-600 text-green-600 hover:bg-green-100',
  },
};
const sizeClass = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-md',
  large: 'px-5 py-3 text-lg',
};
const baseClass="rounded-lg px-4 py-2"
const Button: React.FC<ButtonProps> = ({onClick,title,variant='solid',color="primary",size="small"}) => {


  return (
    <button 
      className={classNames(
        baseClass,
        variantClass[variant][color],
        sizeClass[size]
      )}
    onClick={onClick}>
      {title}
      </button>
  )
}

export default Button