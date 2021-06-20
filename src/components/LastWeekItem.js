import React from 'react'
import lastWeekData from "../data/LastWeekData";
import ContentItem from "./ContentItem";

const LastWeekItem = () => {

    return (
        <div className="content-block-wrap">
            <div className="item-title">
                Last Week
            </div>
            {lastWeekData.map((item, index) =>
                <ContentItem item={item} key={index}/>
            )}
        </div>
    )
}

export default LastWeekItem
