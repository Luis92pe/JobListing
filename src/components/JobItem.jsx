import '../styles/jobitem.scss'

const JobItem = ({company, contract, featured, languages, level, location, logo, new: isNew, position, postedAt, role, tools, handleFilter}) => {
	return (
		<div className="JobItem">
			<div className="JobItem-container">
				<div className="JobItem-brand">
					<figure>
						<img src={logo} alt=""/>
					</figure>
				</div>
				<div className="JobItem-content">
					<div className="JobItem-body">
						<div className="JobItem-header">
							<h3>{company}</h3>
							{isNew && <span className="new">NEW! {isNew}</span>}
							{featured && <span className="featured">Featured</span>}

						</div>
						<div className="JobItem-title">
							<h3>{position}</h3>

						</div>
						<div className="JobItem-description">
							<ul>
								<li>{postedAt}</li>
								<li>{contract}</li>
								<li>{location}</li>
							</ul>
						</div>
					</div>
					<div className="JobItem-tags">
						{[...languages, ...tools].map(item => (<span onClick={() => handleFilter(item)}><b>{item}</b></span>))}
					</div>
				</div>
			</div>
		</div>
	)
}


export default JobItem
