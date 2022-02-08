import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import PageOne from './PageOne'

let sentenceArray = ["Have you gone through all the steps on the Learn How to Program debugging lesson?", "Have you asked another pair for help?", "Have you spent 15 minutes going through through the problem documenting every step?"]

class TicketControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      pageShowing: 4
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if(this.state.pageShowing === 4) {
      this.setState(prevState => ({
        pageShowing: 0
      }));
    }
    else {
      this.setState(prevState => ({
        pageShowing: prevState.pageShowing +1
      }));
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.pageShowing === 0) {
      currentlyVisibleState = <PageOne sentence={sentenceArray[0]}/>
      buttonText = "Next";
    } else if(this.state.pageShowing === 1){
      currentlyVisibleState = <PageOne sentence={sentenceArray[1]}/>
      buttonText = "Next";
    } else if(this.state.pageShowing === 2){
      currentlyVisibleState = <PageOne sentence={sentenceArray[2]}/>
      buttonText = "Next";
    } else if(this.state.pageShowing === 3){
      currentlyVisibleState = <NewTicketForm />
      buttonText = "go back to tickets";
    } else {
      currentlyVisibleState = <TicketList />
      buttonText = "add a new ticket";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;