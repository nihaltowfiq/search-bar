import { FC } from 'react';
import { styled } from 'styled-components';
import Icon from './Icon';

export const IconButton: FC<PropsType> = ({ icon, count }) => {
	return (
		<Wrapper>
			{count && <Count>{count}</Count>}
			<Icon path={icon} height={20} width={20} />
		</Wrapper>
	);
};

interface PropsType {
	icon: string;
	count?: number;
}

const Wrapper = styled.button`
	display: inline-block;
	position: relative;
	padding: 0.75rem;
	border: 1px solid var(--gray);
	border-radius: 50%;
`;

const Count = styled.span`
	position: absolute;
	border-radius: 50%;
	padding: 0.5rem;
	background-color: var(--primary);
	top: -0.75rem;
	right: -1rem;
	height: 2rem;
	width: 2rem;
	font-size: 0.85rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--white);
`;
