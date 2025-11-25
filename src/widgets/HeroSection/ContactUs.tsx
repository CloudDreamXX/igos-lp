"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "../../components/animate-ui/components/buttons/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "../../components/animate-ui/components/radix/dialog";

type Props = {
    triggerStyles?: string;
}

export const ContactUs: React.FC<Props> = ({ triggerStyles }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSuccess(true);
                setFormData({ firstName: "", lastName: "", email: "", message: "" });
            } else {
                alert("Failed to send message.");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            {/* Trigger Button */}
            <DialogTrigger asChild>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        setIsModalOpen(true);
                    }}
                    className={
                        `${triggerStyles
                            ? triggerStyles
                            : "h-[48px] mt-8 bg-[#1D1C1C] text-white hover:bg-[#2F2F2F] disabled:bg-[#707070]"
                        }
        relative overflow-hidden px-8 py-3 rounded-full font-medium group flex items-center justify-center cursor-pointer`
                    }
                >
                    <span className="text-base block translate-y-0 group-hover:-translate-y-[150%] transition-all duration-300">
                        Contact us
                    </span>

                    <span className="text-base absolute left-0 top-[150%] w-full text-center group-hover:top-1/2 -translate-y-1/2 transition-all duration-300">
                        Contact us
                    </span>
                </Button>

            </DialogTrigger>

            {/* Dialog Content */}
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                    <DialogDescription>
                        Fill out the form below and we’ll get back to you shortly.
                    </DialogDescription>
                </DialogHeader>

                {success ? (
                    <p className="text-green-600 text-center font-medium">
                        Your message has been sent successfully!
                    </p>
                ) : (
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="First Name" className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none" />
                            <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Last Name" className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none" />
                        </div>

                        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className="border border-gray-300 rounded-md px-4 py-2 outline-none" />

                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows={4} className="border border-gray-300 rounded-md px-4 py-2 outline-none resize-none"></textarea>

                        <Button className="h-[48px] rounded-full font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover: cursor-pointer mt-4 px-8 py-3 text-base bg-[#1D1C1C] text-white hover:bg-[#2F2F2F] disabled:bg-[#707070]" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
};
