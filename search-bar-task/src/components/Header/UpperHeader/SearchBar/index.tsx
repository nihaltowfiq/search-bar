import Icon, { search } from 'components/Generics/Icon';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Suggestions } from './Suggestions';
import { Wrapper } from './styles';

export const SearchBar: FC = () => {
	const [isFocused, setFocused] = useState<boolean>(false);
	const [suggestions, setSuggestions] = useState<ISuggetions[]>(null);
	const [value, setValue] = useState('');
	const router = useRouter();

	useEffect(() => {
		const getSuggestions = async () => {
			try {
				const headers = { accept: 'application/json', 'content-type': 'application/json' };
				const bodyObject = { method: 'GET', headers };
				const res = await fetch(`http://localhost:8080/search?q=${value}&_page=1&_limit=6`, bodyObject);
				const data = await res.json();
				setSuggestions(data);
			} catch (error) {}
		};

		if (value && isFocused) {
			getSuggestions();
		} else {
			setTimeout(() => setSuggestions(null), 300);
		}
	}, [value, isFocused]);

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setValue(value);
	};

	const handleSearch = (value: string) => {
		if (value) {
			console.log(value);
			const keywords = encodeURIComponent(value);
			router.push(`/search?keywords=${keywords}`);
			setValue('');
			setSuggestions(null);
		}
	};

	return (
		<Wrapper className={`${isFocused ? 'focused' : ''}`}>
			<div className="search_bar">
				<input
					value={value}
					placeholder="Search in RoboDoc"
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					onChange={handleChange}
					onKeyDown={({ code }) => {
						if (code === 'Enter' || code === 'NumpadEnter') handleSearch(value);
					}}
				/>
				<Icon role="button" path={search} onClick={() => handleSearch(value)} />
			</div>

			<Suggestions data={suggestions} value={value} handleSearch={handleSearch} />
		</Wrapper>
	);
};

export interface ISuggetions {
	id: string;
	name: string;
	image: string;
	price: number;
}
