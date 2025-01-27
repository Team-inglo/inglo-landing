import React from "react";
import Image from "next/image";
import GiggleMockup from "@/images/project/giggle_mockup.png";
import Title from "@/images/project/project_title.svg";
import GigleText from "@/images/project/gigle_text.svg";

interface TechItem {
  id: number;
  name: string;
}

const TechCard: React.FC<{ item: TechItem; isSecondary: boolean }> = ({
  item,
  isSecondary,
}) => (
  <div
    className={`py-[14px] px-[20px] bg-white shadow-tech_card rounded-[22px] text-[16px] font-semibold ${
      isSecondary ? "text-secondary" : "text-yellow_200"
    }`}
  >
    {item.name}
  </div>
);

const TechCardRow: React.FC<{
  items: TechItem[];
  justifyContent?: string;
}> = ({ items, justifyContent = "justify-center" }) => (
  <div className={`flex ${justifyContent} w-[736px] gap-[4px]`}>
    {items.map((item) => (
      <TechCard
        key={item.id}
        item={item}
        isSecondary={[3, 7, 9].includes(item.id)}
      />
    ))}
  </div>
);

const ProjectIntro = () => {
  const tech: TechItem[] = [
    { id: 1, name: "Visible pores" },
    { id: 2, name: "Visible pores" },
    { id: 3, name: "Visible pores" },
    { id: 4, name: "Visible pores" },
    { id: 5, name: "Visible pores" },
    { id: 6, name: "Visible pores" },
    { id: 7, name: "Visible pores" },
    { id: 8, name: "Visible pores" },
    { id: 9, name: "Visible pores" },
    { id: 10, name: "Visible pores" },
  ];

  return (
    <section className="flex flex-col justify-center items-center py-[100px] px-[144px] bg-[url('/images/project/radial_gradient.svg')] bg-contain bg-center">
      <div className="flex flex-col justify-center items-center gap-[24px]">
        <div className="relative">
          <Title />
          <p className="text-dark_yellow text-[20px] absolute top-[10px] left-[28px]">
            ✦ first project ✦
          </p>
        </div>
        <GigleText />
        <div className="text-white_800 text-[22px] leading-[32px]">
          외국인 유학생을 위한 아르바이트 신청 및 관리 서비스
        </div>
      </div>
      <Image
        src={GiggleMockup}
        alt="Giggle service"
        width={1152}
        className="object-contain"
        priority
      />
      <div className="w-[1152px] flex flex-col items-center justify-center gap-[36px] bg-yellow_100 rounded-[64px] pt-[64px] pb-[32px]">
        <p className="text-white_900 text-[28px] font-semibold">
          Giggle만의 독자적인 기술을 소개할게요
        </p>
        <div className="flex flex-col gap-[24px] py-[20px]">
          <TechCardRow items={tech.slice(0, 5)} justifyContent="justify-end" />
          <TechCardRow
            items={tech.slice(5, 10)}
            justifyContent="justify-center"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
