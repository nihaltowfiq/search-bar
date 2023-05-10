export const formatNumber = (number: string | number = 0): string => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatPrice = (amount: string | number = 0): string => {
	try {
		return new Intl.NumberFormat('en-BD', {
			style: 'currency',
			currency: 'BDT',
			currencyDisplay: 'narrowSymbol',
			minimumFractionDigits: 0,
		})
			.format(Number(amount))
			.replace(/^(\D+)/, '$1 ');
	} catch (error) {
		return `BDT ${formatNumber(amount)}`;
	}
};
