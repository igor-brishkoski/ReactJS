import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

function EventImage(props) {
  return (
    <img class="eventImage" src={props.value} alt=""/>
  )
}

class Event extends React.Component {
  render() {
    return (
      <div>
        <EventImage value={"https://res.cloudinary.com/wework/image/upload/c_fill,h_460,w_460/v1507739294/production/event/photo/1a6bce00-90cf-0135-57ba-4676e91ae0c9.jpg"}/>
        <div>
          <h5>December 5th * 12:30 - 14:00</h5>
          <a href="https://members.wework.com/events/join-us-for-a-holiday-pop-up-with-shop-archipelago-56588"><h2>Join Us for a Holiday Pop-Up with Shop-Archipelago</h2></a>
          <h5>Tower 49</h5>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Event />,
  document.getElementById('root')
);
