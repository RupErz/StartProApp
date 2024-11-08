import React from 'react';
import Form from 'next/form';
import SearchFormReset from '@/components/SearchFormReset';
import {Search} from "lucide-react";


// NextJs just have a new form component can update our URL search params
// and reduce the boilerplate code.

const SearchForm = ({ query }: { query?: string }) => {
    
    return (
        <Form action = "/" scroll = {false} className = "search-form">
            <input
                name = "query"
                defaultValue = ""
                className = "search-input"
                placeholder = "Search Startups"    
            />
            <div className = "flex gap-2">
                {query && <SearchFormReset />} {/* If query exist then render the component SearchFormReset. */}
                <button type = "submit" className = "search-btn text-white">
                    <Search className = "size-5"/>
                </button>
            </div>
        </Form>
    )
}

export default SearchForm