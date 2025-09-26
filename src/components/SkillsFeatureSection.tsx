import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import skillsData from "../../skills-portfolio-data.json";

interface Skill {
  title: string;
  description: string;
  icon: string;
  proficiency: string;
  years_experience: string;
}

// CSS-based icon solution as backup
const iconStyles = {
  design: "bg-gradient-to-br from-pink-400 to-purple-600",
  code: "bg-gradient-to-br from-blue-400 to-indigo-600",
  video: "bg-gradient-to-br from-red-400 to-orange-600",
  server: "bg-gradient-to-br from-green-400 to-teal-600",
};

const iconEmojis = {
  design: "🎨",
  code: "💻",
  video: "🎬",
  server: "⚙️",
};

const iconMap = {
  design:
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=80&h=80&fit=crop&crop=center",
  code: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=80&h=80&fit=crop&crop=center",
  video:
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=80&h=80&fit=crop&crop=center",
  server:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=80&h=80&fit=crop&crop=center",
};

const proficiencyColors = {
  advanced: "from-green-400 to-emerald-600",
  intermediate: "from-yellow-400 to-orange-500",
  beginner: "from-blue-400 to-indigo-600",
};

const SkillCard: React.FC<{
  skill: Skill;
  index: number;
  onReadMore: (skill: Skill) => void;
}> = ({ skill, index, onReadMore }) => {
  const truncatedDescription =
    skill.description.length > 150
      ? skill.description.substring(0, 150) + "..."
      : skill.description;

  return (
    <div
      className={cn(
        "group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6",
        "border border-white/20 shadow-xl hover:shadow-2xl",
        "transition-all duration-500 ease-out",
        "hover:scale-[1.02] hover:-translate-y-2",
        "transform-gpu will-change-transform"
      )}
      style={{
        animationDelay: `${index * 0.2}s`,
      }}
    >
      {/* Proficiency Badge */}
      <div className="absolute top-4 right-4">
        <div
          className={cn(
            "px-3 py-1 rounded-full text-xs font-semibold text-white",
            "bg-gradient-to-r",
            proficiencyColors[
              skill.proficiency as keyof typeof proficiencyColors
            ]
          )}
        >
          {skill.proficiency.charAt(0).toUpperCase() +
            skill.proficiency.slice(1)}
        </div>
      </div>

      {/* Experience Badge */}
      <div className="absolute top-4 left-4">
        <div className="px-2 py-1 bg-gray-100/80 rounded-lg text-xs font-medium text-gray-700">
          {skill.years_experience}
        </div>
      </div>

      {/* Icon/Image Placeholder */}
      <div className="flex justify-center mb-6 mt-8">
        <div className="relative">
          <div
            className={cn(
              "w-20 h-20 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden",
              iconStyles[skill.icon as keyof typeof iconStyles] ||
                "bg-gradient-to-br from-gray-100 to-gray-200"
            )}
          >
            <div className="absolute inset-0 bg-black/10 rounded-xl" />
            <div className="relative z-10">
              {/* Try to load image, fallback to emoji */}
              <div className="relative">
                <Image
                  src={iconMap[skill.icon as keyof typeof iconMap]}
                  alt={skill.title}
                  width={48}
                  height={48}
                  className="rounded-lg relative z-10"
                  onError={(e) => {
                    // Hide image on error and show emoji fallback
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Emoji fallback - shown when image fails to load */}
                <div className="absolute inset-0 flex items-center justify-center text-2xl">
                  {iconEmojis[skill.icon as keyof typeof iconEmojis] || "📋"}
                </div>
              </div>
            </div>
          </div>
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-xl blur-sm -z-10 group-hover:blur-md transition-all duration-300" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-gray-800 transition-colors">
        {skill.title}
      </h3>

      {/* Description (3 lines) */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[3.6rem] overflow-hidden">
        {truncatedDescription}
      </p>

      {/* Read More Button */}
      <div className="flex justify-center">
        <button
          onClick={() => onReadMore(skill)}
          className={cn(
            "px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600",
            "text-white font-semibold rounded-lg shadow-lg",
            "hover:from-blue-600 hover:to-purple-700",
            "hover:shadow-xl hover:scale-105",
            "transition-all duration-300 ease-out",
            "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          )}
        >
          Read More
        </button>
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />
    </div>
  );
};

const SkillModal: React.FC<{
  skill: Skill | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ skill, isOpen, onClose }) => {
  if (!isOpen || !skill) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full",
          "border border-white/20 shadow-2xl",
          "transform transition-all duration-300",
          "max-h-[90vh] overflow-y-auto"
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition-colors"
        >
          <span className="text-gray-600 text-lg">×</span>
        </button>

        {/* Modal Content */}
        <div className="text-center mb-6">
          {/* Large Icon */}
          <div className="flex justify-center mb-6">
            <div
              className={cn(
                "w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden",
                iconStyles[skill.icon as keyof typeof iconStyles] ||
                  "bg-gradient-to-br from-gray-100 to-gray-200"
              )}
            >
              <div className="absolute inset-0 bg-black/10 rounded-2xl" />
              <div className="relative z-10">
                <div className="relative">
                  <Image
                    src={iconMap[skill.icon as keyof typeof iconMap]}
                    alt={skill.title}
                    width={64}
                    height={64}
                    className="rounded-xl relative z-10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Emoji fallback for modal */}
                  <div className="absolute inset-0 flex items-center justify-center text-3xl">
                    {iconEmojis[skill.icon as keyof typeof iconEmojis] || "📋"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {skill.title}
          </h2>

          {/* Badges */}
          <div className="flex justify-center gap-4 mb-6">
            <div
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold text-white",
                "bg-gradient-to-r",
                proficiencyColors[
                  skill.proficiency as keyof typeof proficiencyColors
                ]
              )}
            >
              {skill.proficiency.charAt(0).toUpperCase() +
                skill.proficiency.slice(1)}
            </div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
              {skill.years_experience} Experience
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="text-gray-700 leading-relaxed text-base">
          {skill.description}
        </div>

        {/* Close Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={onClose}
            className={cn(
              "px-8 py-3 bg-gradient-to-r from-gray-500 to-gray-600",
              "text-white font-semibold rounded-lg shadow-lg",
              "hover:from-gray-600 hover:to-gray-700",
              "hover:shadow-xl hover:scale-105",
              "transition-all duration-300 ease-out"
            )}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const SkillsFeatureSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSkill(null), 300);
  };

  return (
    <>
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-3xl" />
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 relative z-[5]">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My Skills & Expertise
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Discover my professional journey across design, development, and
            creative technologies. Each skill represents years of dedicated
            learning and real-world application.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.skills_sections.map((skill, index) => (
              <SkillCard
                key={skill.title}
                skill={skill}
                index={index}
                onReadMore={handleReadMore}
              />
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Focus
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Primary Skills
                </h4>
                <p className="text-gray-600 text-sm">
                  {skillsData.professional_focus.primary.join(", ")}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Secondary Skills
                </h4>
                <p className="text-gray-600 text-sm">
                  {skillsData.professional_focus.secondary.join(", ")}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Currently Learning
                </h4>
                <p className="text-gray-600 text-sm">
                  {skillsData.professional_focus.learning.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <SkillModal
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default SkillsFeatureSection;
