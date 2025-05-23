"use client";
import { useOrganizationList } from "@clerk/nextjs";
import React from "react";
import ListItem from "./ListItem";

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: { infinite: true },
  });
  if (userMemberships.data?.length === 0) return null;
  return (
    <ul className="flex flex-col  justify-center gap-4">
      {userMemberships.data?.map(({ organization: { id, name, imageUrl } }) => (
        <ListItem key={id} name={name} imageUrl={imageUrl} id={id} />
      ))}
    </ul>
  );
};

export default List;
