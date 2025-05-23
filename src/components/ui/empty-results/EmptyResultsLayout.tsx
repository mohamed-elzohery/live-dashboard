import Image from "next/image";
import React, { PropsWithChildren } from "react";
import { Button } from "../button";

interface EmptyResultsLayoutComponent extends React.FC<PropsWithChildren> {
  EmptyResultsImage: React.FC<{ src: string } & PropsWithChildren>;
  EmptyResultsHeader: React.FC<PropsWithChildren>;
  CTAEmptyResults: React.FC<{ onClick?: () => void } & PropsWithChildren>;
}

const EmptyResultsLayout: EmptyResultsLayoutComponent = ({ children }) => {
  return (
    <article className="flex flex-col items-center justify-center gap-4 p-4 h-full">
      {children}
    </article>
  );
};

const EmptyResultsImage: React.FC<{ src: string } & PropsWithChildren> = ({
  src,
}) => {
  return <Image width={140} height={140} src={src} alt="No results" />;
};

const EmptyResultsHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="text-xl font-semibold text-center">{children}</h2>;
};

const CTAEmptyResults: React.FC<
  { onClick?: () => void } & PropsWithChildren
> = ({ children, onClick }) => {
  return (
    <Button onClick={onClick} className="cursor-pointer">
      {children}
    </Button>
  );
};

EmptyResultsLayout.EmptyResultsImage = EmptyResultsImage;
EmptyResultsLayout.EmptyResultsHeader = EmptyResultsHeader;
EmptyResultsLayout.CTAEmptyResults = CTAEmptyResults;

export default EmptyResultsLayout;
