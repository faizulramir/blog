import { Button, buttonVariants } from "@/Components/ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { HeroCards } from "./HeroCards";
import { Link } from "@inertiajs/react";

export default function Hero() {
    return (
        <>
            <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
                <div className="text-center lg:text-start space-y-6">
                    <main className="text-5xl md:text-6xl font-bold">
                        <h1 className="inline">
                            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                                Welcome
                            </span>{" "}
                            to
                        </h1>{" "}
                        my{" "}
                        <h2 className="inline">
                            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                                personal
                            </span>{" "}
                            Portfolios
                        </h2>
                    </main>

                    <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                        I 🩶 Code too much. Might vomit.
                    </p>

                    <div className="space-y-4 md:space-y-0 md:space-x-4">
                        <Link
                            href={route('project.show')}
                            className={`w-full md:w-1/3 ${buttonVariants({
                                variant: "default",
                            })}`}
                        >
                           View Projects
                        </Link>
                        <a
                            href="https://github.com/faizulramir/blog"
                            target="_blank"
                            className={`w-full md:w-1/3 ${buttonVariants({
                                variant: "outline",
                            })}`}
                        >
                            Github Repository
                            <GitHubLogoIcon className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Hero cards sections */}
                <div className="z-10">
                    <HeroCards />
                </div>
            </section>
        </>
    )
}