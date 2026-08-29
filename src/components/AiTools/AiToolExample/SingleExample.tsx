import { AiExample } from "@/types/aiExample";
import Image from "next/image";
import Link from "next/link";

const SingleExample = ({ example }: { example: AiExample }) => {
  return (
    <div className="aiExamples-border-gredient relative rounded-lg">
      <div className="group relative overflow-hidden rounded-lg px-8 py-9 ">
        <span
          className={`features-bg absolute left-0 top-0 -z-1 h-full w-full ${
            example?.rotate && "rotate-180"
          }`}
        ></span>
        <span className="icon-border relative mx-auto mb-6 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
          <Image src={example.icon} alt="icon" width={32} height={32} />
        </span>

        <h3 className="mb-4 text-2xl font-semibold text-white">
          {example.title}
        </h3>
        <p className="font-medium">{example.description}</p>

        <Link
          href={example.path}
          aria-label="Try it out! button"
          className="button-border-gradient hover:button-gradient-hover relative mt-9 inline-block gap-1.5 rounded-lg  px-6 py-3 text-sm text-white shadow-button hover:shadow-none"
        >
          Try it out!
        </Link>
      </div>
    </div>
  );
};

export default SingleExample;
