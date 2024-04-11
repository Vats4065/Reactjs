import React from "react";
// import "./index.css"
function Cards(props) {
  return (
    <>
      <div className="card">
        <a href={props.imgclick} target="_blank">
          <img src={props.imgsrc} alt="thumbnail" className="card-img" />
        </a>
        <div className="card_info">
          <span className="card-category">{props.title}</span>
          <h3 className="card-title">{props.sn}</h3>
          <a target="_blank" href={props.link}>
            <button>Watch now</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Cards;
