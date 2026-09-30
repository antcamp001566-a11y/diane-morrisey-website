// Renders a schema.org JSON-LD script tag. `data` should already be a
// plain JSON-serializable object built by the caller (see the-book and
// recipes/[slug] pages for examples).
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
