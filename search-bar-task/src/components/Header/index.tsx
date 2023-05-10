import { FC } from 'react';
import { styled } from 'styled-components';
import { UpperHeader } from './UpperHeader';

export const Header: FC = () => {
	return (
		<Wrapper>
			<UpperHeader />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	box-shadow: 0px 0px 15px -5px var(--gray);
`;
