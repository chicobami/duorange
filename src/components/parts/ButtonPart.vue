<template>
    <button>
      <slot></slot>
    </button>
  </template>
  
  <style scoped>
  button {
    background-color: #C9A444;
    font-family: 'Orbitron';
    border: none;
    box-shadow: 0rem 0.4rem #846B29;
    border-radius: 0.7rem;
    width: auto;
    font-weight: bold;
    padding: 0.5rem 0.8rem;
    font-size: 3rem;
    color: #ffffff;
    cursor: pointer;
    display: flex;
  }
  
  </style>