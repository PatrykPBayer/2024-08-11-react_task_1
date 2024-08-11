export const Content = (props) => {
  //mozna dac sobie concole.log(props.author) by sprawdzić czy mamy unassigned żeby widziec, że brakuje nam czegoś
  return (
    <article>
      <header>
        <h1>Article title</h1>
        <p>author: {props.author}</p>
      </header>
      <section>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quos
        distinctio numquam totam repellendus sapiente!
      </section>
    </article>
  );
};
