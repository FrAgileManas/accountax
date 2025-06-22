import Spinner from "./loading-spinner";

interface LoadingFullProps {
  isLoading: boolean;
  text?: string;
}

export function LoadingFull({ isLoading, text }: LoadingFullProps) {
  if (!isLoading) return null;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex justify-center items-center flex-col z-10">
        <Spinner size="xl" />
        {text && <p className="mt-4 text-md">{text}</p>}
      </div>
    </div>
  );
}
