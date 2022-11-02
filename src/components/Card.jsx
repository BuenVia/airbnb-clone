import React from "react";

export default function Card() {
    return ( 
    <div className="card">
        <div className="card--img-container">
            <img src="../images/katie-zaferes.png" alt="Image" className="card--img" />
        </div>
        <div className="card--text-container">
            <div className="card--score-container">
                <img src="../images/star.png" alt="Star" className="card--star" />
                <p>4.6</p>
                <p className="card--rating">(6) - USA</p>
            </div>
            <p className="card--title">Life lessons with Katie Zaferes</p>
            <p className="card--text"><span className="card--text-bold">From $188</span> / person</p>
        </div>
    </div> 
    )
}