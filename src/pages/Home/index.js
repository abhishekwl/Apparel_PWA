import React from 'react';

//LOCAL
import SearchAppBar from '../../components/SearchAppBar';

class Home extends React.Component {
    state = {
        sector: "Home",
        tabValue: 0
    };

    renderTabLayout(sectorName) {
        this.setState({ sector: sectorName });
    }

    render() {
        return (
            <div>
                <SearchAppBar renderTabLayout={this.renderTabLayout} />  
            </div>
        );
    }
};

export default Home;