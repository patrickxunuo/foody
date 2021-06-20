import React from 'react'
import ContentItem from "./ContentItem";
import monthData from "../data/MonthData";

const MonthItem= () => {
    const date = new Date()
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear()


    return (
        <div className="content-block-wrap">
            <div className="item-title">
                {month} {year}
            </div>
            {monthData.map((item, index) =>
                <ContentItem item={item} key={index}/>
            )}
        </div>
    )
}

export default MonthItem
