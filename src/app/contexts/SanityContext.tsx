import { SanityClient } from "@sanity/client";
import React, { useMemo } from "react";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import imageUrlBuilder from "@sanity/image-url";

export interface SanityContextValue {
  client?: SanityClient;
  imageUrlBuilder?: ImageUrlBuilder;
}

export const SanityContext = React.createContext<SanityContextValue>({});

export interface SanityProviderProps {
  children: React.ReactNode;
  client: SanityClient;
  imageUrlBuilder?: ImageUrlBuilder;
}

export const SanityProvider: React.FC<SanityProviderProps> = ({
  children,
  client,
}: SanityProviderProps) => {
  const builder = useMemo(() => imageUrlBuilder(client), [client]);
  return (
    <SanityContext.Provider value={{ client, imageUrlBuilder: builder }}>
      {children}
    </SanityContext.Provider>
  );
};
