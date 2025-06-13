import { useState } from 'react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      email: formData.email ? '' : 'Email is required.',
      message: formData.message ? '' : 'Message is required.',
    };
    setErrors(newErrors);

    if (!newErrors.email && !newErrors.message) {
      alert('Form submitted successfully!');
      // Aquí puedes enviar los datos al servidor
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form className="flex flex-wrap gap-5 w-full p-6 bg-white shadow-md rounded" onSubmit={handleSubmit}>
        <h2 className="w-full text-2xl font-bold mb-4">Contact Us</h2>
        <div className="flex-1 min-w-[45%]">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex-1 min-w-[45%]">
          <label htmlFor="email" className="block mb-2">Email</label>
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
        <div className="flex-1 min-w-[45%]">
          <label htmlFor="phone" className="block mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex-1 min-w-[45%]">
          <label htmlFor="message" className="block mb-2">Message</label>
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
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
