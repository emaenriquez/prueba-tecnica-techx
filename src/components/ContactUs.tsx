import { useState } from 'react';
import { EMAIL_REGEX, PHONE_REGEX } from '../utils/regex';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const isFormValid = formData.name.length > 3 && EMAIL_REGEX.test(formData.email) &&
    PHONE_REGEX.test(formData.phone) && formData.message.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const newErrors = { ...errors };
    if (name === 'name') {
      newErrors.name = value.length > 3 ? '' : 'El nombre tiene que tener al menos 3 caracteres.';
    } else if (name === 'email') {
      newErrors.email = EMAIL_REGEX.test(value) ? '' : 'Email formato invalido';
    } else if (name === 'phone') {
      newErrors.phone = PHONE_REGEX.test(value) ? '' : 'numero de telefono invalido, debe tener 10 digitos';
    } else if (name === 'message') {
      newErrors.message = value.length > 0 ? '' : 'Mensaje es requerido';
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <form className="flex flex-wrap gap-5 w-full max-w-4xl p-6 bg-white shadow-md rounded" onSubmit={handleSubmit}>
        <h2 className="w-full text-2xl font-bold mb-4">Contacto</h2>
        <div className="flex-1 min-w-[100%] sm:min-w-[45%]">
          <label htmlFor="name" className="block mb-2">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>

        <div className="flex-1 min-w-[100%] sm:min-w-[45%]">
          <label htmlFor="email" className="block mb-2">Gmail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div className="flex-1 min-w-[100%] sm:min-w-[45%]">
          <label htmlFor="phone" className="block mb-2">Numero de telefono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
        </div>

        <div className="flex-1 min-w-[100%] sm:min-w-[45%]">
          <label htmlFor="message" className="block mb-2">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={!isFormValid}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
