function Filter({ filter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={filter} />
    </div>
  );
}

export default Filter;
