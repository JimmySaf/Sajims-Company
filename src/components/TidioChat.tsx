import { useEffect } from "react";

export default function TidioChat() {
  useEffect(() => {
    if (document.getElementById("tidio-script")) return;

    const script = document.createElement("script");
    script.id = "tidio-script";
    script.src = "//code.tidio.co/YOUR_ID_HERE.js"; // ← paste your real ID
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}