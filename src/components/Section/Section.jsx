import React from 'react';
import {Tittle } from './Section.styled'

export const Section = ({ title, children }) => (
  <div>
    <Tittle>{title}</Tittle>
    {children}
  </div>
);

