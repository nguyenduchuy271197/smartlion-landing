import { Book, LucideIcon } from "lucide-react";

const SOCIALS = {
  email: {
    icon: Book,
    label: "Email",
    value: "contact@smartlion.net",
  },
  phone: {
    icon: Book,
    label: "Phone",
    value: "(+84) 86 713 3779",
  },
  address: {
    icon: Book,
    label: "Address",
    value: "Lim Tower Q1, TP.HCM",
  },
};

function SocialCard({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <li className="space-y-2">
      <div className="w-16 h-16 flex items-center justify-center bg-primary text-primary-foreground rounded-lg">
        <Icon className="w-8 h-8" />
      </div>
      <div>
        <h5 className="font-bold text-2xl">{label}</h5>
        <p>{value}</p>
      </div>
    </li>
  );
}

export default function ContactSocials() {
  return (
    <div>
      <ul className="space-y-6">
        <SocialCard
          icon={SOCIALS.email.icon}
          label={SOCIALS.email.label}
          value={SOCIALS.email.value}
        />
        <SocialCard
          icon={SOCIALS.email.icon}
          label={SOCIALS.email.label}
          value={SOCIALS.email.value}
        />
        <SocialCard
          icon={SOCIALS.email.icon}
          label={SOCIALS.email.label}
          value={SOCIALS.email.value}
        />
      </ul>
    </div>
  );
}
