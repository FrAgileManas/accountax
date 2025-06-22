import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  fullScreen?: boolean;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
};

const Spinner = ({
  size = "md",
  className,
  fullScreen = false,
}: SpinnerProps) => {
  const spinner = (
    <Loader2 className={cn("animate-spin", sizeClasses[size], className)} />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
        <div className="flex flex-col items-center gap-2">
          {spinner}
          <span className="text-sm text-muted-foreground">Loading...</span>
        </div>
      </div>
    );
  }

  return spinner;
};

// LoadingButton component that integrates with shadcn Button
interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  spinnerSize?: "sm" | "md";
  children: React.ReactNode;
}

const LoadingButton = ({
  loading = false,
  spinnerSize = "sm",
  children,
  disabled,
  className,
  ...props
}: LoadingButtonProps) => {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={cn(
        "flex items-center justify-center gap-2",
        "relative",
        className
      )}
    >
      {loading && (
        <Spinner
          size={spinnerSize}
          className="absolute left-1/2 -translate-x-1/2"
        />
      )}
      <span className={cn(loading && "opacity-0")}>{children}</span>
    </button>
  );
};

// Example usage component showing different variants
const SpinnerShowcase = () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="space-y-8">
      {/* Basic spinners */}
      <div className="flex gap-4 items-center">
        <Spinner size="sm" />
        <Spinner size="md" variant="secondary" />
        <Spinner size="lg" variant="ghost" />
        <Spinner size="xl" />
      </div>

      {/* Loading button example */}
      <div className="flex gap-4">
        <LoadingButton
          loading={loading}
          onClick={() => setLoading(true)}
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
        >
          Click to Load
        </LoadingButton>
      </div>

      {/* Full screen overlay example */}
      {loading && <Spinner fullScreen />}
    </div>
  );
};

export { Spinner, LoadingButton, SpinnerShowcase };
export default Spinner;
