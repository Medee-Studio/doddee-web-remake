export default function ProgressBar({
    currentIndex,
    totalItems,
  }: {
    currentIndex: number;
    totalItems: number;
  }) {
    const progressPercentage = (currentIndex / totalItems) * 100;
  
    return (
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    );
  }