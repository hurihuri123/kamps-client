import * as React from 'react';
import MediaQuery from 'react-responsive';
import NavBar from '../../components/Menu/NavBar/NavBar';
import Sidebar from '../../components/Menu/Sidebar/Sidebar';

export default class MenuNavigation extends React.Component {

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
