import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions, postIncome } from '../../redux/operations';
import { addDateNow } from '../../redux/actions';
import getDateNow from '../../utilities/getDateNow';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';
import DashboardPanel from '../../components/Dashboard/dashboardPanel/DashboardPanel';
import AddIncome from '../../components/addIncome/AddIncome';

class DashboardPage extends Component {
  state = {
    isOpenModalIncome: false,
  };

  onChangeModalIncome = () => {
    this.setState(state => ({ isOpenModalIncome: !state.isOpenModalIncome }));
  };

  componentDidMount = () => {
    console.log(this.props.finance);
    this.props.addDateNow(getDateNow());
    this.props.getTransactions();
  };

  render() {
    const { isOpenModalIncome } = this.state;
    const date = this.props.finance.authReducer.createdAt
    const postIncome=  this.props.postIncome
    return (
      <>
        <h2>DashboardPage</h2>
        <DashboardMenu changeModal={this.onChangeModalIncome} />
        {isOpenModalIncome && (
          <AddIncome closeModal={this.onChangeModalIncome} date={date} addIncome={postIncome} />
        )}
        <DashboardPanel />
      </>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getTransactions,
  postIncome,
  addDateNow,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
