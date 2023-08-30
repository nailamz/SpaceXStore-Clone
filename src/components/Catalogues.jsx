function CardCatalogue(props) {
  return (
    <div className="bg-white">
      <div className="p-1">
        <div className={props.image}></div>
      </div>
      <div className="pt-5">
        <a className="products font-bold flex justify-center text-xs">{props.cardTitle}</a>
        <p className="price flex justify-center text-xs font-semibold">${props.priceCard}</p>
      </div>
  </div>
  );
}

export default CardCatalogue