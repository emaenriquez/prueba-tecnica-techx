import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactUs from './ContactUs';

// Mockear la función alert para evitar que se muestre en el entorno de pruebas
const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('ContactUs Form Validation and Submission', () => {
  // Antes de cada test, renderiza el componente
  beforeEach(() => {
    render(<ContactUs />);
  });

  // Limpiar el mock de alert después de cada test
  afterEach(() => {
    mockAlert.mockClear();
  });

  test('El botón de envío debe estar inicialmente deshabilitado', () => {
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    expect(submitButton).toBeDisabled();
  });

  // --- Tests para el campo 'Nombre' ---
  test('Mostrar error si el nombre tiene 1 o 2 caracteres', async () => {
    const nameInput = screen.getByLabelText(/nombre/i);
    fireEvent.change(nameInput, { target: { value: 'Jo' } });
    expect(screen.getByText(/el nombre tiene que tener al menos 3 caracteres/i)).toBeInTheDocument();

    // El botón sigue deshabilitado
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    expect(submitButton).toBeDisabled();
  });

  test('No mostrar error si el nombre tiene 3 o más caracteres', async () => {
    const nameInput = screen.getByLabelText(/nombre/i);
    fireEvent.change(nameInput, { target: { value: 'John' } });
    expect(screen.queryByText(/el nombre tiene que tener al menos 3 caracteres/i)).not.toBeInTheDocument();
  });

  // --- Tests para el campo 'Email' ---
  test('Mostrar error si el email tiene formato inválido', async () => {
    const emailInput = screen.getByLabelText(/gmail/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    expect(screen.getByText(/email formato invalido/i)).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /enviar/i });
    expect(submitButton).toBeDisabled();
  });

  test('No mostrar error si el email tiene formato válido', async () => {
    const emailInput = screen.getByLabelText(/gmail/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(screen.queryByText(/email formato invalido/i)).not.toBeInTheDocument();
  });

  // --- Tests para el campo 'Teléfono' ---
  test('Mostrar error si el teléfono no tiene 10 dígitos', async () => {
    const phoneInput = screen.getByLabelText(/numero de telefono/i);
    fireEvent.change(phoneInput, { target: { value: '12345' } }); // Menos de 10
    expect(screen.getByText(/numero de telefono invalido, debe tener 10 digitos/i)).toBeInTheDocument();

    fireEvent.change(phoneInput, { target: { value: '12345678901' } }); // Más de 10
    expect(screen.getByText(/numero de telefono invalido, debe tener 10 digitos/i)).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /enviar/i });
    expect(submitButton).toBeDisabled();
  });

  test('No mostrar error si el teléfono tiene exactamente 10 dígitos', async () => {
    const phoneInput = screen.getByLabelText(/numero de telefono/i);
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    expect(screen.queryByText(/numero de telefono invalido, debe tener 10 digitos/i)).not.toBeInTheDocument();
  });

  // --- Tests para el campo 'Mensaje' ---
  test('Mostrar error si el mensaje está vacío', async () => {
    const messageInput = screen.getByLabelText(/mensaje/i);
    fireEvent.change(messageInput, { target: { value: '' } });
    expect(screen.getByText(/mensaje es requerido/i)).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /enviar/i });
    expect(submitButton).toBeDisabled();
  });

  test('No mostrar error si el mensaje no está vacío', async () => {
    const messageInput = screen.getByLabelText(/mensaje/i);
    fireEvent.change(messageInput, { target: { value: 'Hola, esto es un mensaje.' } });
    expect(screen.queryByText(/mensaje es requerido/i)).not.toBeInTheDocument();
  });

  // --- Test de habilitación del botón y envío del formulario ---
  test('El botón de envío se habilita cuando todos los campos son válidos', async () => {
    const nameInput = screen.getByLabelText(/nombre/i);
    const emailInput = screen.getByLabelText(/gmail/i);
    const phoneInput = screen.getByLabelText(/numero de telefono/i);
    const messageInput = screen.getByLabelText(/mensaje/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    // Llenar todos los campos con valores válidos
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message.' } });

    // Esperar a que el estado del botón se actualice. `waitFor` es útil para estados asíncronos.
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
  });

  test('Alerta de envío exitoso al enviar un formulario válido', async () => {
    const nameInput = screen.getByLabelText(/nombre/i);
    const emailInput = screen.getByLabelText(/gmail/i);
    const phoneInput = screen.getByLabelText(/numero de telefono/i);
    const messageInput = screen.getByLabelText(/mensaje/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    // Llenar todos los campos con valores válidos
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { value: 'jane.doe@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '0987654321' } });
    fireEvent.change(messageInput, { target: { value: 'Another test message.' } });

    // El botón debe estar habilitado
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });

    // Enviar el formulario
    fireEvent.click(submitButton);

    // Verificar que la función alert fue llamada con el mensaje correcto
    expect(mockAlert).toHaveBeenCalledTimes(1);
    expect(mockAlert).toHaveBeenCalledWith('Form submitted successfully!');
  });
});