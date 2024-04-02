import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  errorMsg: null | string;
};

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    errorMsg: null,
  };

  // Update state so fallback UI will render
  public static getDerivedStateFromError = (error: Error): State => ({
    errorMsg: error.message,
  });

  // DOM has finished rendering fallback UI, report error info
  public static componentDidCatch = (
    error: Error,
    errorInfo: ErrorInfo,
  ): void => {
    console.error("Error Boundry caught:", error, errorInfo);
  };

  public render(): ReactNode {
    const {
      state: { errorMsg },
      props: { children, fallback },
    } = this;

    // Render either fallback UI for error or children if no errorMsg
    return errorMsg ? fallback : children;
  }
}

export default ErrorBoundary;
