import { Header } from 'components/Header';
import { Fragment } from 'react';

export const Layout = ({ children = null }) => {
	return (
		<Fragment>
			<Header />
			{children}
		</Fragment>
	);
};
