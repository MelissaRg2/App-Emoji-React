import React from 'react'; 
import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Form from '../components/Form';

test('renders the form and handles submit', () => {
  const setValueEmoji = vi.fn();
  const toggleDarkMode = vi.fn();
  const { getByPlaceholderText, getByRole } = render(
    <Form setValueEmoji={setValueEmoji} toggleDarkMode={toggleDarkMode} darkMode={false} />
  );

  const input = getByPlaceholderText('Busca emojis por palabra ...');
  fireEvent.change(input, { target: { value: 'smile' } });

  const button = getByRole('button', { name: /Todos/i });
  fireEvent.click(button);

  expect(setValueEmoji).toHaveBeenCalledWith('');
});
