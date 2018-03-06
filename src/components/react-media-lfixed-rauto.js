import React, {Component, cloneElement} from 'react';

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
    aside: PropTypes.element,
    elements: PropTypes.array,
  };

  static defaultProps = {
    align: 'normal',
    justify: 'space-between',
    gap: '10px',
    elements: [],
  };
  /*===properties end===*/

  get elements(){
    const { elements } = this.props;
    return elements.map((elem,index)=>{
      const newProps = objectAssign({ key: index }, elem.props);
      return cloneElement(elem,newProps);
    })
  }

  render() {
    const {
      className,
      align,
      justify,
      aside,
      gap,
      elements,
      ...props
    } = this.props;
    return (
      <section
        {...props}
        data-align={align}
        className={classNames('webkit-sassui-flex-lfixed-rauto react-media-lfixed-rauto', className)}>
        { aside && <aside className="left"> {aside} </aside> }
        <div
        style={{ marginLeft: gap }}
        className="right webkit-sassui-flex-justify" data-align="normal"
        data-justify={justify}
        data-direction='column'>
        { this. elements }
        </div>
      </section>
    );
  }
}
