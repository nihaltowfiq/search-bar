import { IconButton, cart, heart, user } from 'components/Generics';
import { FC } from 'react';
import { styled } from 'styled-components';

export const TopMenu: FC = () => {
	return (
		<div className="flex items-center justify-between gap-x-5">
			<IconButton icon={user} />
			<IconButton icon={heart} count={99} />
			<IconButton icon={cart} count={99} />
		</div>
	);
};

const Wrapper = styled.div``;
