import React from "react";
import ContentItem from "./ContentItem";
import recentData from "../data/RecentData.js";

const RecentItem = () => {

    return (
        <div className="content-block-wrap">
            {recentData.map((item, index) =>
                <ContentItem item={item} key={index}/>
            )}
        </div>
    )
}

export default RecentItem
