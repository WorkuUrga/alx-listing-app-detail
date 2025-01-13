import React, {useState} from 'react';
import Pill from '../common/Pill';

const FILTER_OPTIONS = [
    "All",
    'Top Villa',
    'Free Scheduler',
    'Book now, Pay later',
    'Self checkin',
    'Instant Book'
]
const FilterSection: React.FC = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>('')
    const handleFilterClick = (filter:string) => {
        setSelectedFilter(filter)
    }
    return (
        <div className='mb-8 space-x-4'>
            {FILTER_OPTIONS.map((filter, index) => (
                <Pill 
                key={index}
                label={filter}
                isSelected = {selectedFilter === filter}
                onClick ={() => handleFilterClick(filter)}
                />
            ))}
        </div>
    )
}
export default FilterSection