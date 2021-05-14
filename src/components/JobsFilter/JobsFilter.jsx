import './JobsFilter.scss'

const JobsFilter = ({filters, removeItem}) => {
return (
<div className="JobsFilter">
	<div className="JobsFilter-container">
		<div className="JobsFilter-filters">

			{filters.map(item =>
				<div className="JobsFilter-item">
					<p>{item}</p>
					<span onClick={() => removeItem(item)}>X</span>
				</div>
			)}
		</div>
		<span className="close"> Clear </span>
	</div>
</div>
)
}

export default JobsFilter
