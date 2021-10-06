import { connect } from 'react-redux';
import React from 'react';
import SearchResult from './search_result';


const mSTP = (state) => ({
  businesses: state.entities.businesses,
});

export default connect(mSTP)(SearchResult);