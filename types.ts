import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface ReviewProps {
  author: string;
  rating: number;
  content: string;
  tier?: string;
  date: string; // Added relative date
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}