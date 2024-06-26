/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';

export default function MainButton({
  disabled = false,
  type,
  size,
  color,
  onClick,
  children,
  sx,
  ...props
}) {
  return (
    <Button
      disabled={disabled}
      sx={sx}
      type={type}
      size={size}
      color={color}
      variant="contained"
      onClick={onClick}
      fullWidth
      {...props}>
      {children}
    </Button>
  );
}