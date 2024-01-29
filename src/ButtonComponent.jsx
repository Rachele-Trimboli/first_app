// creo una variabile con lo stesso nome
const ButtonComponent = function (textButton) {
  return (
    <div>
      <button>{textButton.text}</button>
    </div>
  );
};
export default ButtonComponent;
