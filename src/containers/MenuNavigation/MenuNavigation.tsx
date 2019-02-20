import * as React from 'react';
import MediaQuery from 'react-responsive';
import NavBar from '../../components/Menu/NavBar/NavBar';
import Sidebar from '../../components/Menu/Sidebar/Sidebar';
import Lang from '../../config/Language';
import Category from '../../models/Category';

export default class MenuNavigation extends React.Component {
    categories: Category[] = [
        {
            name: Lang.format('Recreation_and_Leisure'),
            subCatergories: [
                {name: Lang.format('Attractions')},
                {name: Lang.format('Culinary_Experience')},
                {name: Lang.format('Tour_and_Excursion')},
                {name: Lang.format('Water_Park_and_Pools')},
                {name: Lang.format('Cinema')},
                {name: Lang.format('Karaoke_Rooms')},
                {name: Lang.format('Bowling')},
                {name: Lang.format('Escape_Rooms')},
                {name: Lang.format('Culture_and_Enrichment')},
                {name: Lang.format('Beauty_and_Care')}
            ]
        }, {
            name: Lang.format('Restaurants_and_Meals'),
            subCatergories: [
                {name: Lang.format('Attractions')},
            ]
        }, {
            name: Lang.format('Tourism_and_Recreation'),
            subCatergories: [
                {name: Lang.format('Attractions')},
            ]
        }, {
            name: Lang.format('Shows_and_Performances'),
            subCatergories: [
                {name: Lang.format('Attractions')},
            ]
        }, {
            name: Lang.format('Spa'),
            subCatergories: [
                {name: Lang.format('Attractions')},
            ]
        }, {
            name: Lang.format('Cars_Deals'),
            subCatergories: [
                {name: Lang.format('Attractions')},
            ]
        }, {
            name: Lang.format('Consumption'),
            subCatergories: [
                {name: Lang.format('Attractions')},
            ]
        }, {
            name: Lang.format('Fitness_and_Sport'),
            subCatergories: [
                {name: Lang.format('Attractions')},
            ]
        }, {
            name: Lang.format('Insurance_and_Finance'),
            subCatergories: [
                {name: Lang.format('Attractions')},
            ]
        }, {
            name: Lang.format('Retirees_and_Enjoy'),
            subCatergories: [
                {name: Lang.format('Attractions')},
            ]
        },
    ];

    render() {
        return (
            <div>
                {/* adjusted to desktop */}
                <MediaQuery query="(max-width: 415px)">
                    <Sidebar />
                </MediaQuery>
                {/* adjusted to mobile */}
                <MediaQuery query="(min-width: 415px)">
                    <NavBar />
                </MediaQuery>
            </div>
        )
    }
}