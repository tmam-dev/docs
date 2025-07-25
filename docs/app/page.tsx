
import {defaultPage } from "@/lib/routes-config";
import { redirect } from 'next/navigation';


export default function Home() {
  redirect(defaultPage);
}