import { TopicPage, makeTopicMetadata } from "@/components/TopicPage";
import { content } from "./content";
import "../nadi.css";
import "../topic-page.css";

export const metadata = makeTopicMetadata(content);

export default function Page() {
  return <TopicPage content={content} />;
}
