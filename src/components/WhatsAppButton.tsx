import { motion } from 'motion/react';
import { MessageCircle, Mail, Calendar } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/917878743214?text=Hello%20Aryan%20Global%20Solutions,%20I%20want%20to%20discuss%20my%20project.';
  const emailUrl = 'mailto:aryanjain772@gmail.com?subject=Enterprise%20Software%20Inquiry';

  const items = [
    {
      id: 'whatsapp',
      label: 'WHATSAPP CHAT',
      icon: MessageCircle,
      href: whatsappUrl,
      bg: 'bg-[#25D366]',
      ring: 'bg-[#25D366]',
      textColor: 'text-[#25D366]',
      isExternal: true,
    },
    {
      id: 'email',
      label: 'DIRECT EMAIL Desk',
      icon: Mail,
      href: emailUrl,
      bg: 'bg-[#06b6d4]',
      ring: 'bg-[#06b6d4]',
      textColor: 'text-[#06b6d4]',
      isExternal: true,
    },
    {
      id: 'calendar',
      label: 'BOOK MEETING',
      icon: Calendar,
      action: () => window.dispatchEvent(new CustomEvent('open-scheduler')),
      bg: 'bg-[#6366f1]',
      ring: 'bg-[#6366f1]',
      textColor: 'text-[#6366f1]',
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-45 flex flex-col gap-3.5">
      {items.map((item, idx) => {
        const Icon = item.icon;
        
        const content = (
          <>
            {/* Pulsing ring for the primary WhatsApp/Email channels */}
            <span className={`absolute inset-0 rounded-full ${item.ring} opacity-20 blur-md group-hover:scale-125 transition-transform duration-300 animate-ping`} />
            <Icon className="h-5 w-5 fill-current text-white relative z-10" />
            
            {/* Hover label */}
            <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-[#090d22] border border-white/10 text-white text-[9px] font-extrabold font-mono tracking-widest py-1.5 px-3 rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-2xl pointer-events-none">
              {item.label}
            </span>
          </>
        );

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + idx * 0.1, duration: 0.4 }}
          >
            {item.href ? (
              <a
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className={`relative flex items-center justify-center w-11 h-11 ${item.bg} rounded-full text-white shadow-xl hover:scale-110 active:scale-95 transition-transform duration-300 group`}
                aria-label={item.label}
              >
                {content}
              </a>
            ) : (
              <button
                type="button"
                onClick={item.action}
                className={`relative flex items-center justify-center w-11 h-11 ${item.bg} rounded-full text-white shadow-xl hover:scale-110 active:scale-95 transition-transform duration-300 group cursor-pointer`}
                aria-label={item.label}
              >
                {content}
              </button>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
