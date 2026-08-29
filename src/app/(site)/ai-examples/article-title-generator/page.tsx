"use client";
import Options from "@/components/AiTools/Options";
import PreviewGeneratedText from "@/components/AiTools/PreviewGeneratedText";
import Breadcrumb from "@/components/Breadcrumb";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import z from "zod";
import { integrations, messages } from "../../../../../integrations.config";

const ArticleTitleGeneratorSchema = z.object({
  numberOfWord: z.string(),
  articleTopic: z.string(),
});

const optionData = [1, 2, 3, 4, 5];

const ArticleTitleGeneratorPage = () => {
  const [generatedContent, setGeneratedContent] = useState("");
  const [data, setData] = useState({
    numberOfWord: "",
    articleTopic: "",
  });

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setGeneratedContent("Loading....");

    if (!integrations?.isOpenAIEnabled) {
      toast.error(messages.opanAi);
      return;
    }

    const validation = ArticleTitleGeneratorSchema.safeParse(data);
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    // the prompt
    const prompt = [
      {
        role: "system",
        content:
          "You will be provided with the article topic and number of word needed, and your task is to generate multiple article titles.",
      },
      {
        role: "user",
        content: `Number of words: ${data.numberOfWord} \n Article topic: ${data.articleTopic}`,
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

      const cleanedResponse = response.data.replace(/"/g, "");
      setGeneratedContent(cleanedResponse);
    } catch (error: any) {
      setGeneratedContent("Please Add the API Key!");
      console.error("Error:", error?.message);
    }

    setData({
      numberOfWord: "",
      articleTopic: "",
    });
  };

  return (
    <>
      <title>
        Article Title Generator | AI Tool - Next.js Template for AI Tools
      </title>
      <meta name="description" content="This is AI Examples page for AI Tool" />
      <Breadcrumb pageTitle="Article Title Generator" />

      <section className="pb-17.5 lg:pb-22.5 xl:pb-27.5">
        <div className="mx-auto grid max-w-[1170px] gap-8 px-4 sm:px-8 lg:grid-cols-12 xl:px-0">
          <div className="gradient-box rounded-lg bg-dark-8 p-8 lg:col-span-4">
            <h2 className="pb-2 text-2xl font-bold text-white">Title Topic</h2>
            <p className="pb-6">What your title will be about?</p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="articleTopic" className="pb-4">
                  Topic
                </label>
                <input
                  onChange={handleChange}
                  value={data.articleTopic}
                  name="articleTopic"
                  type="text"
                  className="rounded-lg border border-white/[0.12] bg-dark-7 px-5 py-3 text-white outline-hidden focus:border-purple"
                  placeholder="Type article topic here"
                  required
                />
              </div>

              <Options
                values={optionData}
                title={"Select the Number of Words"}
                name={"numberOfWord"}
                handleChange={handleChange}
                selected={data.numberOfWord}
              />

              <button className="hero-button-gradient mt-5 w-full rounded-lg px-7 py-3 text-center font-medium text-white duration-300 ease-in hover:opacity-80 ">
                Generate
              </button>
            </form>
          </div>
          <PreviewGeneratedText
            generatedContent={generatedContent}
            height={262}
          />{" "}
        </div>
      </section>
    </>
  );
};

export default ArticleTitleGeneratorPage;
