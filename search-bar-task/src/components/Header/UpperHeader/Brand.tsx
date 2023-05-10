import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const Brand: FC = () => {
	return (
		<Link href="/">
			<Image src="/logo.png" height={60} width={180} alt="brand-logo" />
		</Link>
	);
};
