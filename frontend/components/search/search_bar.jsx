import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            find: '',
            near: ''
        }

        this.handleSearch = this.handleSearch(this);
    }

    handleSearch(e) {
        e.preventDefault()
        this.props.updateFilter('search', this.state)
        this.goToBusinesses()
    }

    goToBusinesses() {
        if (this.state.find !== '') {
            let 
        }
    }
}

export default withRouter(SearchBar);