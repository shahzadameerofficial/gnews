import { useState } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import HeadlineFilters from "./Filters/HeadlineFilters";


function TopHeadlines() {
    const [params, setParams] = useState({country:'in', category: 'general'})
    const filterData = (filter) => {
        setParams({country:filter.country, category: filter.category})
    }

    return (
        <>  
            <HeadlineFilters onFilter={filterData}></HeadlineFilters>
            <CardsContainer path={`top-headlines/category/${params.category}/${params.country}`}></CardsContainer>
        </>
    )
}

export default TopHeadlines