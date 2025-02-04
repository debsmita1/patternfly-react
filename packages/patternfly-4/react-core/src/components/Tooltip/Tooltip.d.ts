import { FunctionComponent, HTMLProps, ReactElement, ReactNode } from 'react';
import { Omit } from '../../helpers/typeUtils';
import { BasicPlacement, Props } from 'tippy.js';

export const TooltipPosition: {
  top: 'top';
  bottom: 'bottom';
  left: 'left';
  right: 'right';
};

export interface TooltipProps extends Omit<HTMLProps<HTMLDivElement>, 'content' | 'children'> {
  /** Tooltip position */
  position?: BasicPlacement;
  /** Tooltip trigger */
  trigger?: string;
  /** If true, tries to keep the tooltip in view by flipping it if necessary */
  enableFlip?: boolean;
  /** Tooltip additional class */
  className?: string;
  /** The reference element to which the tooltip is relatively placed to */
  children: React.ReactNode;
  /** Tooltip content */
  content: React.ReactNode;
  /** Delay in ms before a tooltip appears */
  entryDelay?: number;
  /** Delay in ms before a tooltip disappears */
  exitDelay?: number;
  /** The element to append the tooltip to, defaults to body */
  appendTo?: ReactElement<any> | ((ref: ReactElement<any>) => ReactElement<any>);
  /** z-index of the tooltip */
  zIndex?: number;
  /** Size of the tooltip */
  maxWidth?: '12.5rem';
  /** Distance of the tooltip to its target, defaults to 15 */
  distance?: number;
}

declare const Tooltip: FunctionComponent<TooltipProps>;

export default Tooltip;
