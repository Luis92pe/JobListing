import React, {useState, useEffect} from 'react'
import JobItem from "./JobItem";
import JobsFilter from "./JobsFilter/JobsFilter";
import dataJson from "../data/data";

const JobsListing = () => {
	const [jobs, setJobs] = useState([])
	const [filters, setFilters] = useState([])

	const getJobs = async filter => {
		try {
			// const response = await fetch('http://localhost:3001/jobs')
			// const jobs = await response.json()
			setJobs(filter)
		} catch (e) {
			console.log(e)
		}
	}

	const handleFilter = item => {
		setFilters([...new Set([...filters, item])])
	}

	const removeItem = item => {
		if(item){
			const newFilters = filters.filter(i => i !== item)
			setFilters(newFilters)
		} else {
			setFilters([])
		}

	}

	const compareFilter = (arr, f) => {
		if(arr.length >= f.length){
			let x = 0
			f.forEach(i => {
				if(arr.includes(i))
					x++
			})
			return x === f.length
		}
		return false
	}

	useEffect(() => {
		const filteredData = dataJson.filter(a => compareFilter([...a.languages, ...a.tools], filters))
		if(filteredData.length > 0 || filters.length>0)
			setJobs(filteredData)
		else
			getJobs(dataJson)
	}, [filters])

	return (
		<>
			{filters.length > 0 && <JobsFilter filters={filters} removeItem={removeItem}/>}
			<div className={`JobsListing ${filters.length > 0 ? '' : 'with-filter'}`}>
				{ jobs.length > 0 ? jobs.map(item => (<JobItem key={item.id} {...item} handleFilter={handleFilter}/>)) : <p>No results</p>}
			</div>
		</>

	)
}

export default JobsListing
