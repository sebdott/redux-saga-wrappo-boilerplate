import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { authenticationSaga } from '../../actions/saga/';
import { exampleReducer } from '../../actions/reducers/';
import { connect } from 'redux-saga-wrappo/connect';
import { getClientItem } from '../../utils';

class Example extends PureComponent {
  componentWillMount = () => {
    const {
      exampleModel,
      userModel,
      authenticationSaga,
      exampleReducer,
    } = this.props;
    exampleModel.updateState({ somethingNew: 'new day' });
    exampleModel.removeState(['somethingNew']);
    userModel.updateState({ name: 'codedsphere' });
    userModel.initializeAll();
    authenticationSaga.Login(1);
    exampleReducer.Other_Reducer();
  };
  render() {
    const { exampleModel } = this.props;
    const { somethingNew } = exampleModel;
    const { Default } = this.props.layouts;
    return <Default>{JSON.stringify(somethingNew)}</Default>;
  }
}

const connectConfig = {
  mapActionToProps: { authenticationSaga, exampleReducer },
  mapStateToProps: ({ userModel, exampleModel }) => {
    return {
      userModel,
      exampleModel,
    };
  },
};

export default getClientItem(['layouts'])(connect(connectConfig)(Example));
