import { CheckCircle, Monitor, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import Hero from "../component/hero";
import PageContainer from "../component/page-container";
import SlimContent from "../component/slim-content";
import TextPanel from "../component/text-panel";
import conferenceContent from "../content/conference.json";
import ContactBox from "../component/contact-box";

const featureIcons = [Users, Monitor, Sparkles, CheckCircle];

const ConferencePage = () => {
    return (
        <div>
            <Hero
                title={conferenceContent.title}
                backgroundImage="/images/hero-konf.png"
                height="40vh"
            />

            <PageContainer>
                <div className="flex flex-col items-center">
                    <SlimContent>
                        <TextPanel
                            eyebrow={conferenceContent.contact.eyebrow}
                            title={conferenceContent.introTitle}
                            text={conferenceContent.description}
                        />
                    </SlimContent>

                    <div className="mt-8 w-full">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-0">
                            {conferenceContent.features.map((featureText, index) => {
                                const Icon = featureIcons[index];

                                return (
                                    <div
                                        key={featureText}
                                        className={`
                                            flex items-center justify-center px-4 py-6 text-center
                                            ${index < conferenceContent.features.length - 1 ? "md:border-r md:border-[var(--color-text-muted)]/50" : ""}
                                        `}
                                    >
                                        <div>
                                            <Icon className="mx-auto h-8 w-8 text-[var(--color-gold)] md:h-10 md:w-10" />
                                            <p className="mt-4 text-sm text-[var(--color-text-muted)] md:text-base">
                                                {featureText}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-8 w-full">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            {conferenceContent.gallery.map((image) => (
                                <div key={image.url} className="relative aspect-square w-full overflow-hidden">
                                    <Image
                                        src={image.url}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <ContactBox
                            title={conferenceContent.contact.title}
                            text={conferenceContent.contact.text}
                            phone={conferenceContent.contact.phone}
                            email={conferenceContent.contact.email}
                            
                        />
                    </div>
                </div>
            </PageContainer>
        </div>
    );
};

export default ConferencePage;
