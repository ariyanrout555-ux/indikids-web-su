"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(id);
  }, []);

  if (done) return null;

  return (
    <div className="loader-backdrop" aria-hidden="true">
      <div className="loader-orb">
        <div className="loader-logo">Indikids</div>
        <div className="loader-ring" />
        <p className="loader-text">Designing a happy day…</p>
      </div>
    </div>
  );
}
