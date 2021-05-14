import React, {useState, useEffect} from 'react'
import JobItem from "./JobItem";
import '../styles/JobsListing.scss'
import JobsFilter from "./JobsFilter/JobsFilter";

const dataJson = [
	{
		"id": 1,
		"company": "Photosnap",
		"logo": "./images/photosnap.svg",
		"new": true,
		"featured": true,
		"position": "Senior Frontend Developer",
		"role": "Frontend",
		"level": "Senior",
		"postedAt": "1d ago",
		"contract": "Full Time",
		"location": "USA Only",
		"languages": ["HTML", "CSS", "JavaScript"],
		"tools": []
	},
	{
		"id": 2,
		"company": "Manage",
		"logo": "./images/manage.svg",
		"new": true,
		"featured": true,
		"position": "Fullstack Developer",
		"role": "Fullstack",
		"level": "Midweight",
		"postedAt": "1d ago",
		"contract": "Part Time",
		"location": "Remote",
		"languages": ["Python"],
		"tools": ["React"]
	},
	{
		"id": 3,
		"company": "Account",
		"logo": "./images/account.svg",
		"new": true,
		"featured": false,
		"position": "Junior Frontend Developer",
		"role": "Frontend",
		"level": "Junior",
		"postedAt": "2d ago",
		"contract": "Part Time",
		"location": "USA Only",
		"languages": ["JavaScript"],
		"tools": ["React", "Sass"]
	},
	{
		"id": 4,
		"company": "MyHome",
		"logo": "./images/myhome.svg",
		"new": false,
		"featured": false,
		"position": "Junior Frontend Developer",
		"role": "Frontend",
		"level": "Junior",
		"postedAt": "5d ago",
		"contract": "Contract",
		"location": "USA Only",
		"languages": ["CSS", "JavaScript"],
		"tools": []
	},
	{
		"id": 5,
		"company": "Loop Studios",
		"logo": "./images/loop-studios.svg",
		"new": false,
		"featured": false,
		"position": "Software Engineer",
		"role": "Fullstack",
		"level": "Midweight",
		"postedAt": "1w ago",
		"contract": "Full Time",
		"location": "Worldwide",
		"languages": ["JavaScript"],
		"tools": ["Ruby", "Sass"]
	},
	{
		"id": 6,
		"company": "FaceIt",
		"logo": "./images/faceit.svg",
		"new": false,
		"featured": false,
		"position": "Junior Backend Developer",
		"role": "Backend",
		"level": "Junior",
		"postedAt": "2w ago",
		"contract": "Full Time",
		"location": "UK Only",
		"languages": ["Ruby"],
		"tools": ["RoR"]
	},
	{
		"id": 7,
		"company": "Shortly",
		"logo": "./images/shortly.svg",
		"new": false,
		"featured": false,
		"position": "Junior Developer",
		"role": "Frontend",
		"level": "Junior",
		"postedAt": "2w ago",
		"contract": "Full Time",
		"location": "Worldwide",
		"languages": ["HTML", "JavaScript"],
		"tools": ["Sass"]
	},
	{
		"id": 8,
		"company": "Insure",
		"logo": "./images/insure.svg",
		"new": false,
		"featured": false,
		"position": "Junior Frontend Developer",
		"role": "Frontend",
		"level": "Junior",
		"postedAt": "2w ago",
		"contract": "Full Time",
		"location": "USA Only",
		"languages": ["JavaScript"],
		"tools": ["Vue", "Sass"]
	},
	{
		"id": 9,
		"company": "Eyecam Co.",
		"logo": "./images/eyecam-co.svg",
		"new": false,
		"featured": false,
		"position": "Full Stack Engineer",
		"role": "Fullstack",
		"level": "Midweight",
		"postedAt": "3w ago",
		"contract": "Full Time",
		"location": "Worldwide",
		"languages": ["JavaScript", "Python"],
		"tools": ["Django"]
	},
	{
		"id": 10,
		"company": "The Air Filter Company",
		"logo": "./images/the-air-filter-company.svg",
		"new": false,
		"featured": false,
		"position": "Front-end Dev",
		"role": "Frontend",
		"level": "Junior",
		"postedAt": "1mo ago",
		"contract": "Part Time",
		"location": "Worldwide",
		"languages": ["JavaScript"],
		"tools": ["React", "Sass"]
	}
]


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
		const newFilters = filters.filter(i => i !== item)
		setFilters(newFilters)
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
			<div className="JobsListing">
				{ jobs.length > 0 ? jobs.map(item => (<JobItem key={item.id} {...item} handleFilter={handleFilter}/>)) : <p>No results</p>}
			</div>
		</>

	)
}

export default JobsListing
