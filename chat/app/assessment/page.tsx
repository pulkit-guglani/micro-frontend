"use client";
import dynamic from "next/dynamic";

const AssessmentPage = dynamic(() => import("assessment/AssessmentPage"), {
  ssr: true,
});

export default function AssessmentRoute() {
  return <AssessmentPage />;
}
