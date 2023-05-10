import { FC } from 'react';
import { styled } from 'styled-components';
import { Brand } from './Brand';
import { SearchBar } from './SearchBar';
import { TopMenu } from './TopMenu';

export const UpperHeader: FC = () => {
	return (
		<Wrapper className="container">
			<Brand />
			<SearchBar />
			<TopMenu />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
