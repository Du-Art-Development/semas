* {
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
}

.wrapper {
  padding: 30px;
}

.form-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
}

.form-group label {
  padding-left: 10px;
  cursor: pointer;
}

.radio, .checkbox {
  cursor: pointer;
  appearance: none;
  width: 30px;
  height: 30px;
  border: 3px solid turquoise;
  border-radius: 50%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  outline: none;
}

.checkbox {
  border-radius: 0;
}

.radio:before, .checkbox:before {
  content: '';
  width: 15px;
  height: 15px;
  background: turquoise;
  border-radius: 50%;
  opacity: 0;
  transition: all 600ms ease-in-out;
  position: absolute;
}

.checkbox:before {
  border-radius: 0;
  background: transparent;
  border: 4px solid turquoise;
  border-left: 0;
  border-top: 0;
  width: 7px;
  height: 12px;
  transform: rotate(45deg);
  top: 2px;
}

.radio:checked:before, .checkbox:checked:before {
  opacity: 1;
}

.radio:focus, .checkbox:focus {
  box-shadow: 0 0 5px turquoise;
}
