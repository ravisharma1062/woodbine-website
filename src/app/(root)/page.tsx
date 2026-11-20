// A static host has no server to pick the language, so "/" simply opens /en/.
export default function RootRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/en/" />
      <p style={{ fontFamily: "sans-serif", padding: "2rem" }}>
        <a href="/en/">Woodbine Preparatory School (English)</a> | <a href="/hi/">हिन्दी</a>
      </p>
    </>
  );
}
