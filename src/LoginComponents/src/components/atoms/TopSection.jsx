import React from 'react'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function TopSection(props) {
    const { title, onClickFunction } = props
    return (
        <div style={{ marginBottom: "1em", textAlign: "center", display: "flex", alignItems: "center" }}>
            <div style={{ float: "left", display: 'flex', alignItems: "center" }}>
                <ArrowBackIosIcon fontSize="small" onClick={onClickFunction} />
                <span className="backNavigationText">Back</span>
            </div>
            <h1 style={{ flex: "2" }}> {title}</h1>
        </div>
    )
}

export default TopSection
