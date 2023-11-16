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
    <li className="space-y-2 flex-1 sm:p-8">
      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-primary text-primary-foreground rounded-lg">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>
      <div>
        <h5 className="font-bold text-lg sm:text-2xl">{label}</h5>
        <p>{value}</p>
      </div>
    </li>
  );
}

export default function ContactSocials() {
  return (
    <div>
      <ul className="flex items-center gap-6 flex-wrap">
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
