const element = (
  <div className="congrats-card-bg">
    <h1 className="congrats-card-heading">Congratulations</h1>
    <div className="congrats-card-content-bg">
      <img
        className="congrats-card-profile-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="congrats-card-name">Kiran V</h1>
      <p className="congrats-card-para">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        className="congrats-card-watch-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
