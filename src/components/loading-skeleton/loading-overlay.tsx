import Spinner from "./loading-spinner";

interface LoadingOverlayProps {
  isLoading: boolean;
  text?: string;
}

export function LoadingOverlay({ isLoading, text }: LoadingOverlayProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-xs" />
      <div className="flex justify-center items-center flex-col z-10">
        <Spinner size="xl" />
        {text && <p className="mt-4 text-md">{text}</p>}
      </div>
    </div>
  );
}
