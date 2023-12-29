// https://kinsta.com/blog/errors-in-javascript/

function ActionButton({ text }) {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <button className="btn-action-error" onClick={reloadPage}>
      {text}
    </button>
  );
}

function Error({ error }) {
  return (
    <div className="info-error">
      {error} <ActionButton text="Recharger l'application ?" />
    </div>
  );
}

export default Error;
