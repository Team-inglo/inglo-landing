import TimelineContent from "@/images/timeline_content.svg";

/**
 * @description
 * about us 페이지 타임라인 컴포넌트
 * @component AboutusTimeline
 * @returns {JSX.Element} AboutusTimeline
 * @since 2024.09.29
 */
/**
 * Renders the timeline component for the aboutus section.
 * @returns The rendered timeline component.
 */

const AboutusTimeline = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center py-[6.25rem] px-[9rem] bg-cover bg-no-repeat bg-[url('/images/timeline_bg.svg')]">
        <div className="flex flex-col justify-center items-center gap-[1.5rem]">
          <div className="flex justify-center items-center w-[12.438rem] h-[2.563rem] bg-cover bg-center bg-[url('/images/title_frame.svg')]">
            <h1 className="text-[1.25rem] font-semibold text-primary">
              ✦ Timeline ✦
            </h1>
          </div>
          <h3 className="text-[3rem] font-bold text-deep_gray">타임라인</h3>
          <p className="text-[1.5rem] leading-[2rem] font-medium  text-deep_gray text-center">
            작은 꿈에서 시작된 우리의 여정,
            <br />
            이제는 세상을 변화시키는 큰 꿈으로 🚀
          </p>
        </div>
        <div className="mt-[1.25rem] flex justify-center items-center bg-auto bg-top bg-no-repeat bg-[url('/images/timeline_bar.svg')]">
          <TimelineContent />
        </div>
      </section>
    </>
  );
};

export default AboutusTimeline;
