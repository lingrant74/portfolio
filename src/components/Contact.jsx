import { useForm, ValidationError } from '@formspree/react';
import React from 'react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mqalvoja");
    return (
        <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
            {/* Optional: subject for the email you receive */}
            <input type="hidden" name="_subject" value="New portfolio contact" />

            <label htmlFor="name" className="block text-sm font-medium">
                Name
            </label>
            <input
                id="name"
                name="name"
                required
                className="w-full p-3 bg-gray-100 rounded outline-none focus:ring-2 focus:ring-[#5FB4A2]"
                placeholder="Your name"
            />

            <label htmlFor="email" className="block text-sm font-medium">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full p-3 bg-gray-100 rounded outline-none focus:ring-2 focus:ring-[#5FB4A2]"
                placeholder="you@example.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="message" className="block text-sm font-medium">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full p-3 bg-gray-100 rounded outline-none focus:ring-2 focus:ring-[#5FB4A2]"
                placeholder="How can I help?"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            {/* Honeypot (spam trap) */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            <button
                type="submit"
                disabled={state.submitting}
                className="px-6 py-3 font-public bg-[#203A4C] text-white
                   hover:bg-[#5FB4A2] transition-colors disabled:opacity-60"
            >
                {state.submitting ? "Sending…" : "SEND MESSAGE"}
            </button>

            {state.succeeded && (
                <p className="text-green-600">
                    Thanks! Your message has been sent.
                </p>)}
        </form>
    );
}

export default ContactForm;