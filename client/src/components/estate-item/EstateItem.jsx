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
            <div>Type: {type}</div>
            <div>Price: {price}  {currency === 'Euro' ? '€' : 'lv'}</div>
            <div>location: {location}</div>
            <div><img src="" alt="" /></div>
        </>
    );
};