import PropTypes from 'prop-types';

import "./style.scss";

const propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  href: PropTypes.string,
  as: PropTypes.elementType
};

const defaultProps = {
  variant: "primary",
  as: "button"
};

const Button = ({variant, size, as, href, className, style, width, height, fontSize, children, ...props}) => {
  const ComponentType = as;
  let htmlClass = `btn btn-${variant}`;
  const styles = {
    width,
    height,
    fontSize,
    ...style
  };
  if (typeof (size) != "undefined") htmlClass += ` btn-${size}`;
  if (typeof (className) != "undefined") htmlClass += ` ${className}`;
  return (
    <ComponentType
      className={htmlClass}
      style={styles}
      {...props}
    >
      {children}
    </ComponentType>
  );
}

Button.displayName = 'Button';
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;