const arrCatego = ['Romance', 'Horror', 'Adventure', 'History', 'Biography', 'Historical fiction', 'Nonfiction', 'Others'];

function Select() {
  return (
    <select title="Categories" id="categories">
      <option value="None">Select a category</option>
      {arrCatego.map((catego) => (
        <option value={catego} key={catego}>{catego}</option>
      ))}
    </select>
  );
}

export default Select;
