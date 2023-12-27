function Info() {
  return (
    <div className="info-wrapper">
      <div className="members">
        <MembersIcon className="info-icons" />
        3456 membres
      </div>
      <div className="online">
        <OnlineIcon className="info-icons" />
        1234 online
      </div>
    </div>
  );
}

// function infoComponent() {
//   return null;
// }

function OnlineIcon(props) {
  return (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 26 26"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      n
      <path
        fill="#fff"
        d="M20.281 4.063a1.5 1.5 0 0 0-.906 2.593A8.941 8.941 0 0 1 22 13a8.953 8.953 0 0 1-2.625 6.344a1.503 1.503 0 1 0 2.125 2.125a11.995 11.995 0 0 0 0-16.938a1.5 1.5 0 0 0-1.063-.469a1.5 1.5 0 0 0-.156 0zm-14.906.03a1.5 1.5 0 0 0-.875.438a11.995 11.995 0 0 0 0 16.938a1.503 1.503 0 1 0 2.125-2.125A8.941 8.941 0 0 1 4 13a8.953 8.953 0 0 1 2.625-6.344a1.5 1.5 0 0 0-1.25-2.562zm3.813 3.313a1.5 1.5 0 0 0-.876.407A7.014 7.014 0 0 0 6 13c0 2.048.87 3.91 2.281 5.188a1.504 1.504 0 1 0 2.031-2.22A3.975 3.975 0 0 1 9 13a3.98 3.98 0 0 1 1.313-2.969a1.5 1.5 0 0 0-1.126-2.625zm7.406 0a1.5 1.5 0 0 0-.907 2.625A3.975 3.975 0 0 1 17 13a3.98 3.98 0 0 1-1.313 2.969a1.5 1.5 0 1 0 2 2.219A7.014 7.014 0 0 0 20 13a6.98 6.98 0 0 0-2.281-5.188a1.5 1.5 0 0 0-1.125-.406M13 11.188A1.812 1.812 0 1 0 14.813 13A1.81 1.81 0 0 0 13 11.187z"
      ></path>
    </svg>
  );
}

function MembersIcon(props) {
  return (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#fff"
        d="M5.5 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m7 0h-1v2h1a3 3 0 1 1 0 6h-1v2h1a5 5 0 0 0 0-10M0 19a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5v2h-2v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2H0v-1zm24 0a5 5 0 0 0-5-5h-1v2h1a3 3 0 0 1 3 3v2h2v-1z"
      ></path>
    </svg>
  );
}

export default Info;
