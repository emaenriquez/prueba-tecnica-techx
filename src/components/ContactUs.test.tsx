import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactUs from './ContactUs';

describe('ContactUs Form Validation', () => {
  test('Deshabilitar el botón de envío si el formulario no es válido', () => {
    render(<ContactUs />);
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    expect(submitButton).toBeDisabled();
  });

  test('Mostrar error si el nombre tiene menos de 3 caracteres', () => {
    render(<ContactUs />);
    const nameInput = screen.getByLabelText(/nombre/i);
    fireEvent.change(nameInput, { target: { value: 'Jo' } });
    const errorMessage = screen.getByText(/el nombre tiene que tener al menos 3 caracteres/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('Mostrar error si el teléfono no tiene 10 dígitos', () => {
    render(<ContactUs />);
    const phoneInput = screen.getByLabelText(/numero de telefono/i);
    fireEvent.change(phoneInput, { target: { value: '12345' } });
    const errorMessage = screen.getByText(/numero de telefono invalido, debe tener 10 digitos/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('Habilitar el botón de envío si el formulario es válido', () => {
    render(<ContactUs />);
    const nameInput = screen.getByLabelText(/nombre/i);
    const emailInput = screen.getByLabelText(/gmail/i);
    const phoneInput = screen.getByLabelText(/numero de telefono/i);
    const messageInput = screen.getByLabelText(/mensaje/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(messageInput, { target: { value: 'Hello!' } });

    expect(submitButton).not.toBeDisabled();
  });
});
