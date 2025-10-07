"use client";
import dynamic from "next/dynamic";

const AssessmentPage = dynamic(() => import("assessment/AssessmentPage"), {
  ssr: false,
});

export default function AssessmentRoute() {
  return <AssessmentPage />;
}
