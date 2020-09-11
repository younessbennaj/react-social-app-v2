import React from 'react';
import userEvent from '@testing-library/user-event'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Login from "./";

let emailInput, passwordInput;

beforeAll(() => {
    render(<Login />);
    emailInput = screen.getByRole('textbox', { name: /email/i });
    passwordInput = screen.getByLabelText(/password/i);
})

test('Email input validation works', () => {
    userEvent.type(emailInput, 'user.user.com');
    userEvent.click(passwordInput);
    expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
})