import { styled } from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	max-width: 40rem;
	display: block;
	margin: 0 2rem;
	position: relative;
	transition: all 0.2s ease-in-out;

	&.focused {
		.search_bar {
			svg {
				path {
					fill: var(--primary);
				}
			}
		}
	}
	.search_bar {
		width: 100%;
		height: 3rem;
		display: flex;
		align-items: center;
		border-radius: 1.5rem;
		border: 1px solid var(--gray);
		background-color: var(--white);
		padding: 0 1.5rem 0 0.65rem;

		input {
			width: 100%;
			display: block;
			padding: 0.5rem 1rem;
			background-color: transparent;

			&:focus {
				outline: none;
			}
		}
	}
`;
