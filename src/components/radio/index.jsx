function Radio({ id, name }) {
  return (
    <p className="radio-custom">
      <input type="radio" id={id} name="radio-group" />
      <label htmlFor={id}>{name}</label>
    </p>
  );
}

export default Radio;
