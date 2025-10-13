export default function Divider() {
  return (
    <div
      className="flex items-center gap-4"
      role="separator"
      aria-hidden="true"
    >
      <div className="h-px flex-1 bg-foreground/10" />
      <div className="h-px flex-1 bg-foreground/10" />
    </div>
  );
}
