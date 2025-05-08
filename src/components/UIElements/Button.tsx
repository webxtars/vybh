import React from 'react'
import classNames from 'classnames';
type ButtonProps = {
  title: string;
  variant?: 'solid' | 'outline';
  color?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  customClass?: string,
};
const variantClass = {
  solid: {
    primary: 'bg-purple text-white hover:bg-purple',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
  },
  outline: {
    primary: 'border border-purple text-purple hover:bg-purple hover:text-white',
    secondary: 'border border-gray-600 text-gray-600 hover:bg-gray-100 hover:text-white',
    danger: 'border border-red-600 text-red-600 hover:bg-red- hover:text-white',
    success: 'border border-green-600 text-green-600 hover:bg-green-100 hover:text-white',
  },
};
const sizeClass = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-md',
  large: 'px-5 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({onClick,title,variant='solid',color="primary",size="small",customClass}) => {
const baseClass=`rounded-lg px-4 py-2 ${customClass}`

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