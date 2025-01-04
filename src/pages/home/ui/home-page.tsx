import Container from "@/shared/ui/container";
import GiftboxImage from "@/shared/assets/images/giftbox.png";

export const HomePage = () => {
  return (
    <main className="min-h-[calc(100vh-var(--header))] bg-rose-950 flex items-center">
      <Container>
        <div className="flex items-center">
          <div className="space-y-4">
            <h1 className="text-4xl text-rose-50 max-w-[580px]">
              СОЗДАЙ СВОЙ ИДЕАЛЬНЫЙ СПИСОК ЖЕЛАНИЙ.
            </h1>
            <h2 className="text-3xl leading-[1.125] text-rose-300">
              Легко добавляй, делись и вдохновляйся новыми идеями.
            </h2>
          </div>

          <img
            className="pointer-events-none object-cover max-w-[50%]"
            src={GiftboxImage}
            alt="giftbox"
          />
        </div>
      </Container>
    </main>
  );
};
