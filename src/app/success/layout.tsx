export default function SucessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-900">
      <div>{children}</div>
    </div>
  );
}
