import IconCloud2 from "@/components/ui/icon-cloud";

const slugs = [
  "python",
  "cplusplus",
  "sql",
  "pandas",
  "javascript",
  "mongodb",
  "fastapi",
  "flask",
  "django",
  "express",
  "nextdotjs",
  "react",
  "html5",
  "css3",
  "amazonaws",
  "microsoftazure",
  "git",
  "github",
  "firebase",
  "googlecloud",
  "openai",
  "langchain",
  "crewai",
  "visualstudiocode",
];


export function IconCloud() {
  return (
    <div className="relative flex h-full w-full max-h-[28rem] max-w-[28rem] items-center justify-center overflow-hidden rounded-lg bg-background md:px-10 px-16 md:pb-10 pb-6">
      <IconCloud2 iconSlugs={slugs} />
    </div>
  );
}
