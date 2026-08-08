import ShopNavigation from "@/components/shop/shopnavigation/ShopNavigation";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ShopNavigation />
      {children}
    </>
  );
}