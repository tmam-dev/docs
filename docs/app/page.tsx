import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import Link from "next/link";


import { redirect } from 'next/navigation';

export default function Home() {
  redirect('docs/overview/introduction'); // change this to your desired default page
}