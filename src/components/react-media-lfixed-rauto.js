import React, {Component} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    align: PropTypes.string,
    gap: PropTypes.string,
    justify: PropTypes.string,
    left: PropTypes.element,
    elements: PropTypes.array,
  };

  static defaultProps = {
    align: 'normal',
    justify: 'space-between',
    gap: '10px',
    elements: [],
  };
  /*===properties end===*/

  render() {
    const {
      className,
      align,
      justify,
      left,
      gap,
      elements,
      ...props
    } = this.props;
    return (
      <section
        {...props}
        data-align={align}
        className={classNames('webkit-sassui-flex-lfixed-rauto react-media-lfixed-rauto', className)}>
        { left && <aside className="left"> {left} </aside> }
        <div
        style={{ marginLeft: gap }}
        className="right webkit-sassui-flex-justify" data-align="normal"
        data-justify={justify}
        data-direction='column'>
          { elements.map(item=>item) }
        </div>
      </section>
    );
  }
}
