/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../core/wrapper';
import {PropWrapper} from '../core';

import {
  BASE_CLASS_NAME
} from './constants';

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
  MINI: `${CLASS_NAME}--mini`,
  PLAIN: `${CLASS_NAME}--plain`
};

export type Props<P: {}> = WrapperProps<P> & {
  mini: boolean,
  plain: boolean
};

/**
 * Fab container
 */
export default class Fab<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    mini: false,
    plain: false,
    wrap: <button />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      mini,
      plain,
      className,
      ...props
    } = this.props;
    className = classNames(
      CLASS_NAME,
      {
        [propertyClassNames.MINI]: mini,
        [propertyClassNames.PLAIN]: plain
      },
      className
    );
    return {
      ...props,
      className
    };
  }
}