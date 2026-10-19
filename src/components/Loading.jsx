function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="h-12 w-12 animate-spin rounded-full
        border-4 border-indigo-200 border-t-indigo-600">
      </div>

      <p className="mt-4 font-medium text-gray-600">
        Loading students...
      </p>
    </div>
  );
}

export default Loading;