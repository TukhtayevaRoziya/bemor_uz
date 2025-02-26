import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div className="flex gap-6 items-center lg:justify-start justify-center">
                <Image
                  src="/images/icons/icon-bag.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <p className="text-white sm:text-28 text-18 mb-0">
                  Bemor<span className="text-primary">Uz</span>
                </p>
              </div>
    </Link>
  );
};

export default Logo;
