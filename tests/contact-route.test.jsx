import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import { AppContent } from '../src/App.jsx';

vi.mock('../src/rendering/CosmicCanvas', () => ({
  default: () => null,
}));

vi.mock('emailjs-com', () => ({
  default: {
    sendForm: vi.fn(() => Promise.resolve()),
  },
  sendForm: vi.fn(() => Promise.resolve()),
}));

describe('contact route', () => {
  it('renders the contact page when navigating to /contact', () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <AppContent />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: /contact me/i })
    ).toBeInTheDocument();
  });
});
