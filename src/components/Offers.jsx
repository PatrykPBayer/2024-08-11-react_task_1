import { offers } from "../data/offer";

export const Offers = (props) => {
  return (
    <section>
      <h3>{props.title}</h3>
      <ol>
        {offers.map((offer) => (
          <li key={offer.title}>
            <span>{offer.title}</span>
            <span> | price: {offer.price}&nbsp;PLN</span>
          </li>
        ))}
      </ol>
    </section>
  );
};
