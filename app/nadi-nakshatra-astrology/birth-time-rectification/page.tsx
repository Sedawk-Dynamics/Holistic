import { TopicShell, makeShellMetadata } from "@/components/TopicShell";
import { content } from "./content";
import "../nadi.css";
import "../topic-page.css";

export const metadata = makeShellMetadata(content);

export default function Page() {
  return <TopicShell content={content} />;
}
