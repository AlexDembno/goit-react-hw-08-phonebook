import { useState, useCallback } from 'react';

function UseForm({ initialState, onSubmit }) {
  const [state, setState] = useState(...initialState);

  const handleChangeInput = useCallback(
    target => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ initialState });
  };

  return { state, setState, handleChangeInput, handleSubmit };
}

export default UseForm;
