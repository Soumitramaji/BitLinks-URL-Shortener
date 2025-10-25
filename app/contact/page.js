import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us - Bitlinks",
  description: "Reach out to us at Bitlinks.",
};

export default function ContactPage() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-purple-900 mb-6">
        Contact Us
      </h1>
      <ContactForm />
    </main>
  );
}
