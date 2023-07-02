function CheckItem({ placeholder, id }) {
  return (
    <>
      <li className="ui-state-default" key={id}>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="" id={id} />{placeholder}
          </label>
        </div>
      </li>
    </>
  );
}

export default CheckItem;
