import React from 'react';

class Input extends React.PureComponent {
  render() {
    const {link, error, className, placeholder, onChange, value, type, ...restProps} = this.props;
    const mergedClassName = `input ${error ? 'error' : ''} ${className || ''}`;

    return <input
      {...restProps}
      className={mergedClassName}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}/>
  }
}

export default Input;
