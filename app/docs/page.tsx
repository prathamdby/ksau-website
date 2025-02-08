import fs from "fs";
import path from "path";
import { redirect } from "next/navigation";

// Redirect the /docs route to /docs/installation
export default function DocsPage() {
  redirect("/docs/installation");
}
