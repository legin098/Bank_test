import {Fragment} from 'react';
import MainStackNavigation from './MainNavigation';

/**
 * This component is designed so that when you have an authentication module and/or a splash, the logic is added inside it.
 */

const Navigation = () => {
  return (
    <Fragment>
      <MainStackNavigation />
    </Fragment>
  );
};

export default Navigation;
