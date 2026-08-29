"use client";
import APIkeyModal from "@/components/AiTools/APIkeyModal";
import AiToolExample from "@/components/AiTools/AiToolExample";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import { useEffect, useState } from "react";

const AiToolPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isKeyAvailable, setIsKeyAvailable] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleRemoveKey = () => {
    localStorage.removeItem("apiKey");
    setIsKeyAvailable(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (isOpen && !event.target.closest(".modal-content")) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    const key = localStorage.getItem("apiKey");
    if (key) {
      setIsKeyAvailable(true);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <title>OpenAI Examples | AI Tool - Next.js Template for AI Tools</title>
      <meta name="description" content="This is AI Examples page for AI Tool" />

      <Breadcrumb pageTitle="OpenAI Examples" />

      <section className="pb-25 pt-3">
        <div className="z-10 mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="aiExamples-border-gredient relative flex flex-col items-center justify-center rounded-lg bg-white/[0.05] p-4 md:justify-between lg:flex-row lg:px-6 lg:py-2">
            <p className="text-center md:text-left">
              <Image
                src={"/images/ai-tools/icon-1.svg"}
                width={20}
                height={20}
                alt="icon"
                className="mr-2 inline-block"
              />
              Note: You need to add an OpenAI API key to try example demos, on
              production you can add it on .env
            </p>
            <button
              onClick={isKeyAvailable ? handleRemoveKey : handleModal}
              className="hero-button-gradient mt-2 inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80 lg:mt-0"
            >
              {isKeyAvailable ? "Remove API Key" : "Set API Key"}
            </button>
          </div>

          <AiToolExample />
        </div>

        {isOpen && <APIkeyModal handleModal={handleModal} />}
      </section>
    </>
  );
};

export default AiToolPage;
