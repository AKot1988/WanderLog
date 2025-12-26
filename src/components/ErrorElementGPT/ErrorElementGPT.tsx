type ErrorResponseProps = {
  error: unknown;
};

const extractMessage = (error: unknown): string | null => {
  if (!error) return null;

  if (typeof error === 'string') return error;

  if (error instanceof Error) return error.message;

  if (typeof error === 'object') {
    if ('message' in error && typeof error.message === 'string') {
      return error.message;
    }

    if ('error' in error && typeof error.error === 'string') {
      return error.error;
    }

    if ('errors' in error && Array.isArray(error.errors)) {
      return error.errors.join(', ');
    }
  }

  return 'Сталася невідома помилка';
};

const ErrorElementGPT = ({ error }: ErrorResponseProps) => {
  const message = extractMessage(error);

  if (!message) return null;

  return <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{message}</div>;
};

export default ErrorElementGPT
