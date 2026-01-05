import { CancelButton } from "../styledPages";

export default function Searchbar({ search, setSearch }) {
  function handleSearch(searchString) {
    setSearch(searchString);
  }

  return (
    <>
      <form>
        <input
          placeholder="Find Your Dog"
          value={search}
          onChange={(event) => handleSearch(event.target.value)}
        />
        <CancelButton type="button" onClick={() => handleSearch("")}>
          Remove
        </CancelButton>
      </form>
    </>
  );
}