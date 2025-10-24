import { Button } from "../../shared/ui/Button"

type Props = {
    onClose: () => void;
}

export const ContactUs: React.FC<Props> = ({ onClose }) => {
    return <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-white rounded-2xl shadow-lg w-[90%] md:w-[500px] p-8 relative">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-600 hover:text-black cursor-pointer"
            >
                ✕
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>

            <form className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none" />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none" />
                </div>

                <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-md px-4 py-2 outline-none" />

                <textarea
                    placeholder="Message"
                    rows={4}
                    className="border border-gray-300 rounded-md px-4 py-2 outline-none resize-none"
                ></textarea>

                <Button variant="secondary" size="lg" className="mt-4">
                    Send Message
                </Button>
            </form>
        </div>
    </div>;
}