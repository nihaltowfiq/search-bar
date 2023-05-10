import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { styled } from 'styled-components';
import { formatPrice } from 'utils';
import { ISuggetions } from '.';

export const Suggestions: FC<PropsType> = ({ data, value, handleSearch }) => {
	if (data?.length > 0) {
		return (
			<Wrapper>
				{data?.map(({ name, image, price }, i) => (
					<div key={i} className="item" onClick={() => handleSearch(name)}>
						<Image src={image} height={50} width={50} alt="img" />
						<div>
							<p>{name}</p>
							<h6 className="font-semibold text-primary">{formatPrice(price)}</h6>
						</div>
					</div>
				))}

				<div className="py-3 text-center">
					<Link href={`/search?keywords=${value}`} className="font-semibold text-primary">
						See All Result
					</Link>
				</div>
			</Wrapper>
		);
	}

	return null;
};

interface PropsType {
	value: string;
	data: ISuggetions[];
	handleSearch: (value: string) => void;
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	width: 100%;
	padding: 0.5rem;
	border-radius: 0.5rem;
	margin-top: -1px;
	background-color: var(--white);
	border: 1px solid var(--gray);
	box-shadow: 0px 3px 6px rgba(138, 138, 138, 0.25);

	& > .item {
		display: flex;
		align-items: center;
		padding: 0.75rem 0.5rem;
		border-radius: 0.5rem;
		gap: 1rem;
		cursor: pointer;

		&:hover {
			background-color: var(--gray);
		}
	}
`;
