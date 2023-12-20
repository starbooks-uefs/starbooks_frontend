import * as React from "react";

function UserIcon({ fill = "#6C7281", ...rest }) {
  return (
    <svg width="24" height="24" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 14.8001V13.4001C14 12.6575 13.705 11.9453 13.1799 11.4202C12.6548 10.8951 11.9427 10.6001 11.2 10.6001H5.60005C4.85744 10.6001 4.14525 10.8951 3.62015 11.4202C3.09505 11.9453 2.80005 12.6575 2.80005 13.4001V14.8001" stroke="#212121" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.4001 7.8002C9.9465 7.8002 11.2001 6.54659 11.2001 5.0002C11.2001 3.4538 9.9465 2.2002 8.4001 2.2002C6.8537 2.2002 5.6001 3.4538 5.6001 5.0002C5.6001 6.54659 6.8537 7.8002 8.4001 7.8002Z" stroke="#212121" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
  );
}

export default UserIcon;
