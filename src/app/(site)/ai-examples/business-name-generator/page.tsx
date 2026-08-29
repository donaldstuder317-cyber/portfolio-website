"use client";
import Options from "@/components/AiTools/Options";
import PreviewGeneratedText from "@/components/AiTools/PreviewGeneratedText";
import Breadcrumb from "@/components/Breadcrumb";
import axios from "axios";
import { useState } from "react";
import z from "zod";
import { integrations, messages } from "../../../../../integrations.config";
import toast from "react-hot-toast";

const BusinessNameGeneratorSchema = z.object({
  keyword: z.string(),
  industry: z.string(),
});

const optionData = [
  "Technology and Software",
  "Finance and Banking",
  "Healthcare and Pharmaceuticals",
  "Retail and Consumer Goods",
  "Entertainment and Media",
];

const BusinessNameGeneratorPage = () => {
  const [generatedContent, setGeneratedContent] = useState("");
  const [data, setData] = useState({
    keyword: "",
    industry: "",
  });

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!integrations?.isOpenAIEnabled) {
      toast.error(messages.opanAi);
      return;
    }

    const validation = BusinessNameGeneratorSchema.safeParse(data);
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    setGeneratedContent("Loading....");

    // the prompt
    const prompt = [
      {
        role: "system",
        content:
          "You will be provided with the business name and industry name, and your task is to generate product names \n",
      },
      {
        role: "user",
        content: `Business keyword: ${data.keyword} \n Business industry: ${data.industry}`,
      },
    ];

    //for the demo
    const apiKey = localStorage.getItem("apiKey");

    try {
      const response = await axios.post(
        "/api/generate-content",
        { prompt, apiKey },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      setGeneratedContent(response.data);
    } catch (error: any) {
      setGeneratedContent("Please Add the API Key!");
      console.error("Error:", error?.message);
    }

    setData({
      keyword: "",
      industry: "",
    });
  };

  return (
    <>
      <title>
        Business Name Generator | AI Tool - Next.js Template for AI Tools
      </title>
      <meta name="description" content="This is AI Examples page for AI Tool" />
      <Breadcrumb pageTitle="Business Name Generator" />

      <section className="pb-17.5 lg:pb-22.5 xl:pb-27.5">
        <div className="mx-auto grid max-w-[1170px] gap-8 px-4 sm:px-8 lg:grid-cols-12 xl:px-0">
          <div className="gradient-box rounded-lg bg-dark-8 p-8 lg:col-span-4">
            <h2 className="pb-2 text-2xl font-bold text-white">
              Business Topic
            </h2>
            <p className="pb-6">What your business will be about?</p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="keyword" className="pb-4">
                  Keyword
                </label>
                <input
                  onChange={handleChange}
                  value={data.keyword}
                  name="keyword"
                  id="keyword"
                  type="text"
                  className="rounded-lg border border-white/[0.12] bg-dark-7 px-5 py-3 text-white outline-hidden focus:border-purple"
                  placeholder="Type your business keyword"
                  required
                />
              </div>

              <Options
                title={"Select your Business industry"}
                name={"industry"}
                values={optionData}
                handleChange={handleChange}
                selected={data.industry}
              />

              <button
                type="submit"
                className="hero-button-gradient mt-5 w-full rounded-lg px-7 py-3 text-center font-medium text-white duration-300 ease-in hover:opacity-80 "
              >
                Generate
              </button>
            </form>
          </div>

          <PreviewGeneratedText
            generatedContent={generatedContent}
            height={262}
          />
        </div>
      </section>
    </>
  );
};

export default BusinessNameGeneratorPage;
