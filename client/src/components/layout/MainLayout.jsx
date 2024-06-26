import { Outlet } from "react-router-dom";
import Header from "../header";
import { Stack } from "@chakra-ui/react";
export default function MainLayout() {
  return (
    <Stack
      className="text-lightstar  w-screen  bg-blackest min-h-screen  max-w-screen-2xl m-auto  flex flex-col"
      spacing={0}
    >
      <Header />
      <Outlet />
    </Stack>
  );
}
