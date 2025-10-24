import { useState } from 'react';
import { Button } from "../../shared/ui/Button";

type Props = { onClose: () => void; };

export const ContactUs: React.FC<Props> = ({ onClose }) => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSuccess(true);
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
            } else {
                alert('Failed to send message.');
            }
        } catch (err) {
            console.error(err);
            alert('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl shadow-lg w-[90%] md:w-[500px] p-8 relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black cursor-pointer">✕</button>
                <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>

                {success ? (
                    <p className="text-green-600 text-center">Your message has been sent successfully!</p>
                ) : (
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="First Name" className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none" />
                            <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Last Name" className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none" />
                        </div>

                        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className="border border-gray-300 rounded-md px-4 py-2 outline-none" />

                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows={4} className="border border-gray-300 rounded-md px-4 py-2 outline-none resize-none"></textarea>

                        <Button variant="secondary" size="lg" className="mt-4" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
};
