import * as React from 'react';
import {slide as Menu} from 'react-burger-menu';
import Lang from '../../../config/Language';
import {MenuButtonType} from '../../../models/enums';
import CustomMenuButton from '../CustomMenuButton/CustomMenuButton';


interface Props { }
interface IState { }

export default class Sidebar extends React.Component<Props, IState> {

  //function thats get the content of an item and his classname and genrate him inside a 
  sideBarItem  (text: string)  {
    return (
      <div className="menu-item" > {text} </div>
    )
  }

  render() {
    return (
      <div id="outer-container">
        <Menu outerContainerId={"outer-container"}>
          {/* using navBarItem to genrate items inside the nav bar */}
          {this.sideBarItem(Lang.format('HomePage'))}
          {this.sideBarItem(Lang.format('Gift_For_Family_And_Friends'))}
          {this.sideBarItem(Lang.format('Gift_For_Employes_And_Customers'))}
          {this.sideBarItem(Lang.format('Gift_implementaion'))}
          {this.sideBarItem(Lang.format('Solutions_For_Suppliers'))}
          {this.sideBarItem(Lang.format('About'))}
          {this.sideBarItem(Lang.format('Help'))}
          {this.sideBarItem(Lang.format('Terms_of_Use'))}

          <div className="menu-item">
            <div className="buttons-container">
              {/* using CustomMenuButton component to genrate button  */}
              <CustomMenuButton divClasName={'menu-button'} type={MenuButtonType.sideBarButton} text={Lang.format('Login_Register')} blackColor={true} />
              <CustomMenuButton divClasName={'menu-button'} type={MenuButtonType.sideBarButton} text={Lang.format('Entrance_to_business')} />
              <CustomMenuButton divClasName={'menu-button'} type={MenuButtonType.sideBarButton} text={Lang.format('Entrance_to_Suppliers')} />
            </div>

          </div>

        </Menu>
      </div>

    )

  }
}
