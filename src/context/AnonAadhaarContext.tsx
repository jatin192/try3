import { ReactNode, useState, useEffect } from "react";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";

interface AnonAadhaarContextProps {
  children: ReactNode;
}

export function AnonAadhaarContext({ children }: AnonAadhaarContextProps) {
  const [useTestAadhaar, setUseTestAadhaar] = useState<boolean>(false);

  // Reset any stored state on mount
  useEffect(() => {
    if (window.localStorage) {
      window.localStorage.removeItem('anon-aadhaar-session');
    }
  }, []);

  return (
    <AnonAadhaarProvider
      _useTestAadhaar={useTestAadhaar}
      _appName="Anon Aadhaar Template"
    >
      {children}
    </AnonAadhaarProvider>
  );
}
