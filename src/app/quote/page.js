import GetQuote from "@/components/Quote";

export default function Home() {
  return (
    <main style={{
        background:
          "radial-gradient(circle at top right, #8fc9d9 0%, #c3d1f0 40%, #ffffff 100%)",
      }}>
      <GetQuote />
    </main>
  );
}
