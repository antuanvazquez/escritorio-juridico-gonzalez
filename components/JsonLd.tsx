import { getStructuredData } from "@/lib/schema";

export function JsonLd() {
  const data = getStructuredData();

  return (
    <>
      {data.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
