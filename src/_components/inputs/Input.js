import React from 'react';

class Input extends React.PureComponent {
  render() {
    const {link, error, className, ...restProps} = this.props;
    const mergedClassName = `input ${error ? 'error' : ''} ${className || ''}`;

    return <input className={mergedClassName} {...restProps} />
  }
}

export default Input;
