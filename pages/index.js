import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <>
      <div>That's the Home Page</div>
      <Link href="/test">
        <a>Go to test page</a>
      </Link>
    </>
  );
}
