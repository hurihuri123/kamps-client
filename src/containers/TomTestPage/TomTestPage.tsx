import * as React from 'react';
import MenuNavigation from '../MenuNavigation/MenuNavigation';

export default class TomTestPage extends React.Component {
  render() {
    return (
      <>
        <MenuNavigation />
        <div className={`tom-test-page-container`}>
          <span>This is tom test page</span>
        </div>
      </>
    );
  }
}

