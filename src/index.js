import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

function EventImage(props) {
  return (
    <div class="eventImage" style={{backgroundImage: "url(" + props.value + ")"}}></div>
  )
}

class Event extends React.Component {
  render() {
    return (
      <div class="event">
        <EventImage value={"https://res.cloudinary.com/wework/image/upload/c_fill,h_460,w_460/v1507739294/production/event/photo/1a6bce00-90cf-0135-57ba-4676e91ae0c9.jpg"}/>
        <div class="textDiv">
          <h1>Join Us for a Holiday Pop-Up with Shop-Archipelago</h1>          
          <div class="timedate">
            <div class="date">
              <h2>December 5th * 12:30 - 14:00</h2>
            </div>
            <div class="time">
              <h2>Tower 49</h2>
            </div>
          </div>
          <div>Shop-Archipelago offers a growing family of labels from the vast archipelago of Indonesia and is empowering talented and creative craftspeople to access a global online marketplace. Their hand-picked selections consist of contemporary accessories that are highly intricate, made with exquisite, lasting materials and always hand finished. 
30% discount to all WeWork members during the pop up!</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Event />,
  document.getElementById('root')
);
