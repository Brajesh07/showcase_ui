export const contactConfig = {
  name: "Brajesh Tanwar",
  photoSrc: "/images/profile-img.jpg",
  email: "{{EMAIL}}",
  phone: "{{PHONE}}",
  phoneDigits: "{{PHONE_DIGITS}}",
  social: {
    linkedin: {
      label: "LinkedIn",
      href: "{{LINKEDIN_URL}}",
      bannerSrc: "/images/linkedIn-banner.jpeg",
      avatarSrc: "/images/linkedin-profile-img.jpeg",
      headline:
        "UI/UX Developer | React.js Developer | React Native CLI | NextJS | HTML, CSS, JavaScript, Figma, Figma Prototyping, Tailwind CSS | Building Responsive Web Apps & User-Centered Interfaces",
      location: "Indore, Madhya Pradesh, India",
      school: "Bright Higher Secondary School, Indore",
      website: "https://graphicstack.me/",
      followers: 166,
      connections: 128,
    },
    instagram: {
      label: "Instagram",
      href: "https://www.instagram.com/graphic_stack/",
      avatarSrc: "/images/profile-img.jpg",
      username: "graphic_stack",
      displayName: "Brajesh tanwar",
      followers: 208,
      following: 937,
      bio: [
        "Graphic designer💻",
        "Indore😜",
        "13 oct🎂",
        "Freelancer😎",
      ],
      thumbnails: [
        "/images/basketball.png",
        "/images/sketch.jpg",
        "/images/projects/spellbee.png",
        "/images/projects/decyfr-sport.png",
        "/images/projects/dizrupt-studio.png",
        "/images/projects/vanguard-diagnostics.png",
      ],
    },
  },
} as const;

export type ContactConfig = typeof contactConfig;
export type SocialId = keyof ContactConfig["social"];

export function isContactPlaceholder(value: string) {
  return value.includes("{{");
}

export function telHref() {
  return `tel:${contactConfig.phoneDigits}`;
}

export function smsHref() {
  return `sms:${contactConfig.phoneDigits}`;
}

export function whatsappHref() {
  return `https://wa.me/${contactConfig.phoneDigits}`;
}
