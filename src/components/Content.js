import React from 'react'
import RecentItem from "./RecentItem";
import LastWeekItem from "./LastWeekItem";
import MonthItem from "./MonthItem";
import LastYearItem from "./LastYearItem";
import Footer from "./Footer";

const Content = () => {

    return (
        <div className="content-wrap">
            <RecentItem/>
            <LastWeekItem/>
            <MonthItem/>
            <LastYearItem/>
            <Footer/>
        </div>
    )
}

export default Content
