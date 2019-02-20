import * as React from 'react';
import Lang from '../../../config/Language';
import {MenuButtonType} from '../../../models/enums';
import CustomMenuButton from '../CustomMenuButton/CustomMenuButton';


interface Props {}
interface IState {}

export default class NavBar extends React.Component<Props, IState> {

  //function thats get the content of an item and his classname and genrate him inside a div 
  navBarItem = (text: string, itemClassName: string) => {
    return (
      <div className={itemClassName}> {text} </div>
    )
  }

  render() {
    return (
      <div className={`main-nav-bar`}>
        <div className="top-nav-bar">
          <div className="continar-top-right-item">
            <input className="search-box" type="text" placeholder={Lang.format('Search_for_Brands_or_Tags')} />
          </div>
          <div className="continar-top-left-item">
            {/* using CustomMenuButton component to genrate button  */}
            <CustomMenuButton divClasName={'menu-button'} type={MenuButtonType.navBarButton} text={Lang.format('Entrance_to_business')} />
            <CustomMenuButton divClasName={'menu-button'} type={MenuButtonType.navBarButton} text={Lang.format('Entrance_to_Suppliers')} />
            <CustomMenuButton divClasName={'menu-button'} type={MenuButtonType.navBarButton} text={Lang.format('Login_Register')} blackColor={true} />
          </div>
        </div>

        <div className="buttom-nav-bar">
          <div className="list-nav-bar">
            {/* using navBarItem to genrate items inside the nav bar */}
            {this.navBarItem('נופשונית', "item-nav-bar")}
            {this.navBarItem(Lang.format('For_Family_And_Friends'), "item-nav-bar")}
            {this.navBarItem(Lang.format('For_Employes_And_Customers'), "item-nav-bar")}
            {this.navBarItem(Lang.format('Gift_implementaion'), "item-nav-bar")}
            {this.navBarItem(Lang.format('Solutions_For_Suppliers'), "item-nav-bar")}
            {this.navBarItem(Lang.format('About'), "item-nav-bar")}
            {this.navBarItem(Lang.format('Help'), "item-nav-bar")}
            {this.navBarItem(Lang.format('Contact_us'), "item-nav-bar")}
          </div>
        </div>

      </div>
    )
  }
}
