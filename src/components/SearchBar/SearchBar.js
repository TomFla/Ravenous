import React from './node_modules/react';
import './SearchBar';

let sortByOption = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {

    renderSortByOptions() {
        return sortByOption["Best Match"](sortByOption);
    }
}