import '../styles/jobitem.scss'

const JobItem = () => {
	return (
		<div className="JobItem">
			<div className="JobItem-container">
				<div className="JobItem-brand">
					<figure>
						<img src="account.svg" alt=""/>
					</figure>
				</div>
				<div className="JobItem-content">
					<div className="JobItem-body">
						<div className="JobItem-header">
							<h3>Photoshop</h3>
							<span className="new">NEW!</span>
							<span className="featured">Featured</span>
						</div>
						<div className="JobItem-title">
							<h3>Photoshop</h3>

						</div>
						<div className="JobItem-description">
							<ul>
								<li>1d ago</li>
								<li>fulltime</li>
								<li>Usa Only</li>
							</ul>
						</div>
					</div>
					<div className="JobItem-tags">
						<span><b>frontend</b></span>
						<span><b>Senior</b></span>
						<span><b>HTML</b></span>
						<span><b>HTML</b></span>
						<span><b>HTML</b></span>
						<span><b>HTML</b></span>
						<span><b>HTML</b></span>
					</div>
				</div>
			</div>
		</div>
	)
}


export default JobItem
