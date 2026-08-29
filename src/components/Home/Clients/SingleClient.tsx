import { Client } from "@/types/client";
import Image from "next/image";
import Link from "next/link";

const SingleClient = ({ client }: { client: Client }) => {
  return (
    <div className="swiper-slide w-auto!">
      <Link href="/#" className="static flex h-9 w-auto items-center">
        <Image
          src={client.image}
          alt="client"
          style={{ width: "auto", height: "auto", verticalAlign: "middle" }}
          width={80}
          height={36}
        />
      </Link>
    </div>
  );
};

export default SingleClient;
