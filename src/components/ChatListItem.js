import { HistorySharp } from '@material-ui/icons';
import React, { useState, useEffect} from 'react';
import './ChatListItem.css';


export default ({onClick, active, data}) => {
  
    const [time, setTime] = useState('');
  
    useEffect(()=>{
      if(data.lastMessageDate > 0) {
        let d = new Date(data.lastMessageDate.seconds * 1000);
        let hours = d.getHours();
        let minutes = d.getMinutes();
        hours = hours < 10 ? '0'+hours : hours;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        setTime(`${hours}:${minutes}`);
      }
    },[data]);

    return (
        <div className={`chatListItem  ${active? 'active' : ''}`}
            onClick={onClick}
        >
            <img className="chatListItem--Avatar" src={data.image} alt="" />
            <div className="chatListItem--lines">
                 <div className="chatListItem--Line">
                        <div className="chatListitem--Name">{data.title}</div>
                        <div className="chatListItem--Date">{time}</div>
                </div>
                <div className="chatListItem--Line">
                    <div className="chatListItem--LastMsg">
                        <p>​{data.lastMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}