import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/AppLauncher/app-launcher';
import { ThIcon } from '@patternfly/react-icons';
import { DropdownDirection, DropdownPosition, DropdownToggle, DropdownContext } from '../Dropdown';
import { DropdownWithContext } from '../Dropdown/Dropdown';

export interface ApplicationLauncherProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional element css classes */
    className: string;
    /** Display menu above or below dropdown toggle */
    direction: DropdownDirection;
    /** 
     * @deprecated
     * Use the items prop instead
     * 
     * Array of DropdownItem nodes that will be rendered in the dropdown Menu list
     */
    dropdownItems: React.ReactNode[];
    /** Array of application launcher items */
    items: React.ReactNode[];
    /** Render Application launcher toggle as disabled icon */
    isDisabled: boolean;
    /** open bool */
    isOpen: boolean;
    /** Indicates where menu will be alligned horizontally */
    position: DropdownPosition;
    /** Function callback called when user selects item */
    onSelect: (event: any) => void;
    /** Callback called when application launcher toggle is clicked */
    onToggle?: (value: boolean) => void;
    /** Adds accessible text to the button. Required for plain buttons */
    'aria-label': string;
    /** Flag to indicate if application launcher has groups */
    isGrouped: boolean;
}

export class ApplicationLauncher extends React.Component<ApplicationLauncherProps> {
  static defaultProps = {
    className: '',
    isDisabled: false,
    direction: DropdownDirection.down,
    dropdownItems: [] as React.ReactNode[],
    items: [] as React.ReactNode[],
    isOpen: false,
    position: DropdownPosition.left,
    onSelect: (_event: any): any => undefined,
    onToggle: (_value: boolean): any => undefined,
    'aria-label': 'Application launcher',
    isGrouped: false
  };
  render() {
    const { 'aria-label': ariaLabel, isOpen, onToggle, onSelect, isDisabled, className, isGrouped, dropdownItems, items, ...props } = this.props;
    return (
      <DropdownContext.Provider value={{
        onSelect,
        menuClass: styles.appLauncherMenu,
        itemClass: styles.appLauncherMenuItem,
        toggleClass: styles.appLauncherToggle,
        baseClass: styles.appLauncher,
        baseComponent: 'nav',
        sectionClass: styles.appLauncherGroup,
        sectionTitleClass: styles.appLauncherGroupTitle,
        sectionComponent: 'section',
        disabledClass: styles.modifiers.disabled,
        hoverClass: styles.modifiers.hover,
        separatorClass: styles.appLauncherSeparator
      }}>
        <DropdownWithContext
          {...props}
          dropdownItems={items.length ? items : dropdownItems}
          isOpen={isOpen}
          className={className}
          aria-label={ariaLabel}
          toggle={
            <DropdownToggle
              iconComponent={null}
              isOpen={isOpen}
              onToggle={onToggle}
              isDisabled={isDisabled}
              aria-label={ariaLabel}
            >
              <ThIcon />
            </DropdownToggle>
          }
          isGrouped={isGrouped}
        />
      </DropdownContext.Provider>
    );
  }
}
