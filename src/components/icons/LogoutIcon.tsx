import * as React from "react";

function LogoutIcon({ fill = "#6C7281", ...rest }) {
  return (
    <svg width="24" height="24" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.1501 15.8501H9.4501C9.72849 15.8499 9.9954 15.7392 10.1923 15.5423C10.3891 15.3454 10.4998 15.0785 10.5001 14.8001V13.2251H9.4501V14.8001H3.1501V2.20015H9.4501V3.77515H10.5001V2.20015C10.4998 1.92175 10.3891 1.65484 10.1923 1.45799C9.9954 1.26114 9.72849 1.15042 9.4501 1.15015H3.1501C2.87171 1.15042 2.6048 1.26114 2.40794 1.45799C2.21109 1.65484 2.10038 1.92175 2.1001 2.20015V14.8001C2.10038 15.0785 2.21109 15.3454 2.40794 15.5423C2.6048 15.7392 2.87171 15.8499 3.1501 15.8501Z" fill="black"/>
    <path d="M10.8077 10.9077L12.6903 9.0251H5.25V7.9751H12.6903L10.8077 6.09245L11.55 5.3501L14.7 8.5001L11.55 11.6501L10.8077 10.9077Z" fill="black"/>
    </svg>
  );
}

export default LogoutIcon;
