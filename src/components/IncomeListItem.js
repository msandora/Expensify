import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { startRemoveIncome } from '../actions/incomes';

const IncomeListItem = (props) => {
  const handleRemove = (() => {
    props.startRemoveIncome({ id: props.id });
  });
  return (
    <div className="list-item">
      <div className="item clearfix" id="income-0">
        <Link to={`/edit-income/${props.id}`}>
          <div className="item__description">
            {props.description}
            {props.note && <p className="list-item__note">{props.note}</p>}
            <p className="list-item__sub-title">{moment(props.createdAt).format('MMMM Do, YYYY')}</p>
          </div>    
        </Link>  
        <div className="right clearfix">
            <div className="item__value">- {numeral(props.amount / 100).format('$0,0.00')}</div>
            {/*<div className="item__percentage">21%</div> */}
            <div className="item__delete">
                <button className="item__delete--btn" onClick={handleRemove}>
                  <i className="ion-ios-close-outline"></i>
                </button>
            </div>
        </div>
      </div>
    </div>
  ) 
};

// const mapStateToProps = (state, props) => {
//   return {
//     incomes: state.incomes.find((income) => income.id === props.id
//   }
// };

const mapDispatchToProps = (dispatch) => ({
  startRemoveIncome: (data) => dispatch(startRemoveIncome(data))
});

export default connect(undefined, mapDispatchToProps)(IncomeListItem);