import Moment from "moment";

class Ticket {
  constructor(names, location, issue) {
    this.names = names;
    this.location = location;
    this.issue = issue;
    this.timeOpened = new Moment();
    this.timeSinceOpened = this.setTimeSinceOpened();
    console.log(this);
  }


  setTimeSinceOpened() {
    this.timeSinceOpened = this.timeOpened.fromNow(true);
  }
}

export default Ticket;
