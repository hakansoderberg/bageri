import { CheckCircle, Monitor, Sparkles, Users } from "lucide-react";
import ContentSection from "../component/content-section";
import Hero from "../component/hero";
import PageContainer from "../component/page-container";
import SplitFeature from "../component/split-feature";
import conferenceContent from "../content/conference.json";
import mainContent from "../content/main.json";

const featureIcons = [Users, Monitor, Sparkles, CheckCircle];

const ConferencePage = () => {
    return (
        <div>
            <Hero
                title={conferenceContent.title}
                subTitle={conferenceContent.heroSubtitle}
                backgroundImage="/images/hero-konf.png"
                height="40vh"
            />

            <PageContainer>
                <SplitFeature image="/images/catering.jpg" imageAlt="Konferenslokal">
                    <ContentSection
                        title={conferenceContent.introTitle}
                        text={conferenceContent.description}
                    />
                </SplitFeature>
            </PageContainer>

            <PageContainer>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-0">
                    {conferenceContent.features.map((featureText, index) => {
                        const Icon = featureIcons[index];

                        return (
                            <div
                                key={featureText}
                                className={`
                                    flex items-center justify-center px-4 py-6 text-center
                                    ${index < conferenceContent.features.length - 1 ? "md:border-r md:border-[var(--gdansk)]/50" : ""}
                                `}
                            >
                                <div>
                                    <Icon className="mx-auto h-8 w-8 text-[var(--gullgossen)] md:h-10 md:w-10" />
                                    <p className="mt-4 text-sm text-[var(--muted)] md:text-base">
                                        {featureText}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </PageContainer>

            <PageContainer>
                <div className="mx-auto max-w-[460px] rounded-sm border border-[var(--gullgossen)] p-6 text-center md:p-8">
                    <h2 className="font-merry text-xl text-[var(--gullgossen)] md:text-2xl">
                        {conferenceContent.contact.title}
                    </h2>

                    <p className="mt-4 text-[var(--muted)]">
                        {conferenceContent.contact.text}
                    </p>

                    <p className="mt-6 text-sm text-[var(--gdansk)]">{mainContent.phone}</p>

                    <a
                        href={`mailto:${conferenceContent.contact.email}`}
                        className="mt-2 inline-block text-sm text-[var(--gullgossen)] underline decoration-[var(--gullgossen)] underline-offset-4 hover:text-[var(--gullgossen-light)]"
                    >
                        {conferenceContent.contact.email}
                    </a>
                </div>
            </PageContainer>
        </div>
    );
};

export default ConferencePage;
