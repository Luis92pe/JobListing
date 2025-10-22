const JobsFilter = ({filters, removeItem}) => {
return (
<div className="JobsFilter">
	<div className="JobsFilter-container">
		<div className="JobsFilter-filters">

			{filters.map(item =>
				<div className="JobsFilter-item">
					<p>{item}</p>
					<span onClick={() => removeItem(item)}><i className='fas fa-times'></i></span>
				</div>
			)}
		</div>
		<span className="close" onClick={() => removeItem('')}> Clear </span>
	</div>
</div>
)
}

export default JobsFilter
