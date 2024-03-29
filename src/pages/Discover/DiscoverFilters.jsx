
import { useState } from 'react';
import { Select, Heading } from '@chakra-ui/react'
function DiscoverFilters({onFilter}) {
    const sources = [
        {name: 'BBC News', id: 'bbc-news'},
        {name: 'CNN', id: 'cnn'},
        {name: 'Fox News', id: 'fox-news'},
        {name: 'Google News', id: 'google-news'}
    ];
    const [source, setSource] = useState(sources[0].id)
    const updateConfig = (e) => {
        const {value} = e.target
        setSource(value)
        onFilter(source)
    }
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem'}}>
        <Heading size='md' mr='auto'>Discover</Heading>
        <Heading size='sm' fontWeight='400' marginLeft='auto' marginRight='5px'>Source :</Heading>
        <Select onChange={updateConfig} name='category' width='auto' value={source || 'general'} textTransform='capitalize'>
            {sources.map((src,index)=>
                (<option key={index} value={src.id}>{src.name}</option>)
                )}
        </Select>
        
    </div>      
    )
}

export default DiscoverFilters