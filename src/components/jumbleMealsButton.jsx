export default function RefreshButton() {
  function refreshPage() {
    location.reload();
  }

  return (
    <button className="refresh-page-button" onClick={() => refreshPage()}>
      Jumble Meals! (Takes 3-5 Seconds)
    </button>
  );
}
