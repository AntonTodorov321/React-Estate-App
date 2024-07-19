export default function EstateItem({
    name,
    type,
    price,
    currency,
    location,
    size
}) {
    return (
        <>
            <h4>{name}</h4>
            <div>Size: {size} sq m</div>
            <div>Type: {type} {currency === 'Euro' ? '€' : 'lv'}</div>
            <div>Price: {price}</div>
            <div>location: {location}</div>
        </>
    );
};