import React from 'react';
import { Container } from 'semantic-ui-react';

function Footer() {
	return (
		<Container>
			<footer className='footer' data-cy='footer'>
				<p data-cy='phone-number' style={{ color: 'white' }}>
					Contact us
				</p>
				<p data-cy='mail' style={{ color: 'white' }}>
					Email: worldwidenetflix@wwn.com
				</p>
			</footer>
		</Container>
	);
}

export default Footer;
