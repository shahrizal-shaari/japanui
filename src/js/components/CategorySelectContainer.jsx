import React from 'react';
import { List, Map } from 'immutable';

import text from '../helpers/text';
import SelectBlock from './SelectBlock';

const getCategories = (state = Map()) => {
  const categoryNames = {
    higherlower: text('HIGH/LOW'),
    touchnotouch: text('TOUCH /NO-TOUCH'),
    endsinout: text('END-IN/END-OUT'),
    staysinout: text('STAY-IN/BREAK-OUT'),
  };

  return state.getIn(['values', 'categories'], Map())
    .map((name, category) => List.of(category, categoryNames[category]))
    .toList();
};

const CategorySelectContainer = (props) => (<SelectBlock
  {...props}
  heading={text('Option Type')}
  options={getCategories(props.state)} />);

CategorySelectContainer.displayName = 'CategorySelectContainer';
CategorySelectContainer.propTypes = {
  state: React.PropTypes.instanceOf(Map).isRequired,
};

export default CategorySelectContainer;
