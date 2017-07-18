import React from 'react';

class Paper extends React.PureComponent {
  render() {
    const {className, children, ...restProps} = this.props;
    const mergedClassName = `paper ${className}`;
    return <div {...restProps} className={mergedClassName}>
      {children}
    </div>
  }
}

export default Paper;
