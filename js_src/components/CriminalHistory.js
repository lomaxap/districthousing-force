import { Component } from 'react';
import { Form, Control, track, actions } from 'react-redux-form';
import { connect } from 'react-redux';
import { models } from '../initialState';

class CriminalHistoryForm extends Component {
  addCriminalHistory = () => {
    const { dispatch, criminal_histories } = this.props;
    dispatch(action.push({
      ...models.CriminalHistory, index: criminal_histories.length
    }));
  }

  render() {
    const { criminal_histories } = this.props;
    return (
      {criminal_histories.map((c,i)=>(
        <Form model={track('criminal_histories[]', { index: i })}>
          <div className="field">
            <label>Crime Type</label>
            <Control.text model='.crime_type'/>
          </div>
          <div className="field">
            <label>Year</label>
            <Control.text model='.year'/>
          </div>
          <div className="field">
            <label>Description</label>
            <Control.text model='.description'/>
          </div>
        </Form>
      ))}
      <button onClick{this.addCriminalHistory}>Add Criminal History</button>
    )
  }
}

const mapStateToProps = (state) => ({
  criminal_histories: state.criminal_histories
});

export default connect(mapStateToProps)(CriminalHistoryForm);
