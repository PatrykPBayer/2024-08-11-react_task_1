export const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.search.value.trim();
    alert(value);
    props.onSearchSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" required name="search" />
      <button type="submit">Search</button>
    </form>
  );
};
