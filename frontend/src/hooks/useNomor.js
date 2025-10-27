import React, { useState } from "react";

function useNomor() {
  const [nomor, setNomor] = useState(0);
  function addNumber() {
    setNomor(() => nomor + 1);
  }
  function minNumber() {
    setNomor(() => nomor - 1);
  }
  function resetNumber() {
    setNomor(0);
  }
  return {
    addNumber,
    minNumber,
    resetNumber,
    nomor
  };
}

export default useNomor;
