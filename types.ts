
// Import React to provide access to the React namespace for type definitions
import React from 'react';

export interface SessionInfo {
  title: string;
  description: string;
  items: string[];
  type: 'black' | 'red';
}

export interface StepInfo {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}
