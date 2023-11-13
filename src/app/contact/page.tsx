import ContactBanner from "./_components/contact-banner";
import ContactDetail from "./_components/contact-detail";

export default function ContactPage() {
  return (
    <div className="space-y-20 py-12">
      <ContactBanner />
      <ContactDetail />
    </div>
  );
}
