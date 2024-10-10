export const completeEstateName = (typeOfEstate) => `Rent ${typeOfEstate} apartment`;
export const completeEstateLocation = (location) => `Sofia, ${location}`;
export const getCurrencySymbol = (currency) => currency === 'EUR' ? '€' : 'lv';

export const getFormattedDate = (createdOn) => {
    const date = new Date(createdOn);

    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const formattedTime = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return [formattedDate, formattedTime];
};