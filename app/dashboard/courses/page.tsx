import { Suspense } from "react";
import { CoursesSkeleton } from "@/components/dashboard/courses/courses-skeleton";
import CoursesContent from "@/components/dashboard/courses/courses-content";

export default function CoursesPage() {
  return (
    <Suspense fallback={<CoursesSkeleton />}>
      <CoursesContent />
    </Suspense>
  );
}