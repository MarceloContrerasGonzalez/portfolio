import Image from "next/image";

type SkillCardProps = {
    title: string;
    icon: string;
}


export default function SkillCard({ title, icon }: SkillCardProps) {
    return (
        <div className="text-white p-2 rounded-lg bg-gray-800 hover:-translate-y-1 flex flex-col items-center justify-center">
            <Image src={icon}
                alt={title}
                width={48}
                height={48}
                className="mb-2"
            />
            <h5 className="text-sm lg:text-md font-medium mt-2">{title}</h5>
        </div>
    );
}