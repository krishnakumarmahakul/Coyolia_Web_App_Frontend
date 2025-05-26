import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FormData {
    firstName: string;
    lastName: string;
    position: string;
    email: string;
    message: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    position?: string;
    email?: string;
    message?: string;
}

const Contactmail: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        position: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const validate = (data: FormData): FormErrors => {
        const errors: FormErrors = {};

        if (!data.firstName.trim()) {
            errors.firstName = 'First name is required';
        } else if (!/^[A-Za-z]+$/.test(data.firstName.trim())) {
            errors.firstName = 'Only letters allowed';
        }

        if (!data.lastName.trim()) {
            errors.lastName = 'Last name is required';
        } else if (!/^[A-Za-z]+$/.test(data.lastName.trim())) {
            errors.lastName = 'Only letters allowed';
        }

        if (!data.position.trim()) {
            errors.position = 'Position is required';
        }

        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(data.email.trim())) {
            errors.email = 'Email is invalid';
        }

        if (!data.message.trim()) {
            errors.message = 'Message is required';
        } else if (data.message.length < 10) {
            errors.message = 'Message must be at least 10 characters';
        }

        return errors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[name as keyof FormErrors];
            return newErrors;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const currentTime = new Date().toLocaleString();

            const templateParams = {
                name: `${formData.firstName} ${formData.lastName}`,
                position: formData.position,
                email: formData.email,
                message: formData.message,
                reply_to: formData.email,
                time: currentTime
            };

            emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            ).then(() => {
                setFormData({
                    firstName: '',
                    lastName: '',
                    position: '',
                    email: '',
                    message: ''
                });
                setErrors({});
            });
        }
    };

    return (
        <div className="max-w-[90%] ml-[5%] p-8 bg-gray-100 rounded-lg shadow-md mb-8">

            <h1 className="text-4xl font-semibold text-[#21204c] font-poppins">Coyolia</h1>
            <h1 className="text-4xl font-semibold text-[#21204c] font-poppins">Technology</h1>

            <div className="flex flex-col lg:flex-row gap-10 mt-8 justify-between">
                {/* Form Section */}
                <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-[0_0_0_2px_rgba(0,102,204,0.2)]">
                    <div className="text-center mb-8">
                        <p className="text-[#7655b7] text-lg">Connect with Like-Minded Learners and Experts</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <p className="text-[#7655b7] text-center text-base mb-6">Drop in your email for Event Updates</p>

                        {['firstName', 'lastName', 'position', 'email'].map((field) => (
                            <div key={field} className="flex flex-col gap-2">
                                <label htmlFor={field} className="text-sm text-gray-700 font-medium capitalize">
                                    {field}*
                                </label>
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    id={field}
                                    name={field}
                                    value={formData[field as keyof FormData]}
                                    onChange={handleChange}
                                    className="p-3 border border-gray-300 rounded text-base focus:outline-none focus:border-[#21204c] focus:shadow-[0_0_0_2px_rgba(0,102,204,0.2)]"
                                    required
                                />
                                {errors[field as keyof FormErrors] && (
                                    <p className="text-red-500 text-sm">{errors[field as keyof FormErrors]}</p>
                                )}
                            </div>
                        ))}

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm text-gray-700 font-medium">
                                Message*
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded text-base resize-vertical min-h-[60px] focus:outline-none focus:border-[#21204c] focus:shadow-[0_0_0_2px_rgba(0,102,204,0.2)]"
                                rows={4}
                                required
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm">{errors.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="p-3 bg-[#21204c] text-white rounded font-semibold text-base mt-4 hover:bg-[#0052a3] transition-colors"
                            disabled={Object.keys(errors).length > 0}
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Contact Info Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 text-[#21204c]">
    <div className="flex flex-col items-center gap-8">
      <h3 className="text-4xl font-extrabold mb-4 text-center">Contact Us</h3>
      <div className="flex flex-col gap-6 text-lg font-semibold">
        <div className="flex items-center gap-4">
          <Phone className="w-6 h-6 text-[#7655b7]" />
          +91 97390 05000
        </div>
        <div className="flex items-center gap-4">
          <Mail className="w-6 h-6 text-[#7655b7]" />
          info@coyolia.com
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="w-6 h-6 text-[#7655b7]" />
          #405, Aakruti Nivas Apartments, Czech Colony, Hyderabad, 500018
        </div>
      </div>
    </div>
    </div>

            </div>
        </div>
    );
};

export default Contactmail;
