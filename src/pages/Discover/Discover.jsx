import { useState } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import DiscoverFilters from "./DiscoverFilters";


function Discover() {
    const [source, setSource] = useState('bbc-news')
    const filterData = (filter) => {
        setSource(filter)
    }
    return (
        <>  
            <DiscoverFilters onFilter={filterData}></DiscoverFilters>
            <CardsContainer path={`everything/${source}`}></CardsContainer>
        </>
    )
}

export default Discover