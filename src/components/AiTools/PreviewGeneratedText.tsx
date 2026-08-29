import React, { useState } from "react";

type Props = {
  generatedContent: string;
  height: number;
};

const PreviewGeneratedText = ({ generatedContent, height }: Props) => {
  const [copied, setcopied] = useState(false);

  const copyToClipboard = async () => {
    setcopied(true);

    try {
      await navigator.clipboard.writeText(generatedContent);
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      setcopied(false);
    }, 800);
  };

  return (
    <div className="gradient-box rounded-lg bg-dark-8 px-8 pb-8 pt-5 lg:col-span-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="pb-2 text-2xl font-bold text-white">Output Result</h2>
          <p>Enjoy your outstanding content based on your topic</p>
        </div>
        <button
          onClick={copyToClipboard}
          className="button-border-gradient hover:button-gradient-hover relative mt-9 inline-flex items-center gap-1.5 rounded-lg  px-6 py-3 text-sm text-white shadow-button hover:shadow-none"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1501 3.29999L11.5251 0.699988C11.3501 0.524988 11.1001 0.424988 10.8501 0.424988H6.3001C5.5751 0.424988 4.9751 1.02499 4.9751 1.74999V10.875C4.9751 11.6 5.5751 12.2 6.3001 12.2H13.1001C13.8251 12.2 14.4251 11.6 14.4251 10.875V3.97499C14.4251 3.72499 14.3251 3.47499 14.1501 3.29999ZM11.5751 2.34999L12.5251 3.29999H11.5751V2.34999ZM13.1001 11.075H6.3001C6.2001 11.075 6.1001 10.975 6.1001 10.875V1.74999C6.1001 1.64999 6.2001 1.54999 6.3001 1.54999H10.4501V3.84999C10.4501 4.14999 10.7001 4.42499 11.0251 4.42499H13.3001V10.9C13.3001 11 13.2001 11.075 13.1001 11.075Z"
              fill="white"
            />
            <path
              d="M11.0254 5.625H7.72539C7.42539 5.625 7.15039 5.875 7.15039 6.2C7.15039 6.525 7.40039 6.775 7.72539 6.775H11.0254C11.3254 6.775 11.6004 6.525 11.6004 6.2C11.6004 5.875 11.3254 5.625 11.0254 5.625Z"
              fill="white"
            />
            <path
              d="M11.0254 7.72498H7.72539C7.42539 7.72498 7.15039 7.97498 7.15039 8.29998C7.15039 8.59998 7.40039 8.87498 7.72539 8.87498H11.0254C11.3254 8.87498 11.6004 8.62498 11.6004 8.29998C11.5754 7.97498 11.3254 7.72498 11.0254 7.72498Z"
              fill="white"
            />
            <path
              d="M10.4502 13C10.1502 13 9.8752 13.25 9.8752 13.575V14.25C9.8752 14.35 9.7752 14.45 9.6752 14.45H2.9002C2.8002 14.45 2.7002 14.35 2.7002 14.25V5.1C2.7002 5 2.8002 4.9 2.9002 4.9H3.7502C4.0502 4.9 4.3252 4.65 4.3252 4.325C4.3252 4 4.0752 3.75 3.7502 3.75H2.9002C2.1752 3.75 1.5752 4.35 1.5752 5.075V14.25C1.5752 14.975 2.1752 15.575 2.9002 15.575H9.7002C10.4252 15.575 11.0252 14.975 11.0252 14.25V13.575C11.0252 13.25 10.7752 13 10.4502 13Z"
              fill="white"
            />
          </svg>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <textarea
        className={`mt-6 w-full rounded-lg border border-white/[0.12] bg-dark-7 p-5 outline-hidden focus:border-white/10 ${
          height === 442 ? "min-h-[442px]" : "min-h-[262px]"
        } ${generatedContent ? "text-white" : "cursor-no-drop"}`}
        value={
          generatedContent
            ? generatedContent
            : "Your generated content will be here"
        }
        readOnly
      ></textarea>
    </div>
  );
};

export default PreviewGeneratedText;
