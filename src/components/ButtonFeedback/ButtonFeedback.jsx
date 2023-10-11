import React from 'react';
import { Button } from './ButtonFeedback.styled';

export const ButtonFeedback = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <Button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </div>
);

