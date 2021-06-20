import React from 'react'
import lastYearData from "../data/LastYearData";
import ContentItem from "./ContentItem";

const LastWeekItem = () => {

    return (
        <div className="content-block-wrap">
            <div className="item-title">
                2020
            </div>
            {lastYearData.map((item, index) =>
                <ContentItem item={item} key={index}/>
            )}
        </div>
    )
}

export default LastWeekItem
