"use client";

import { DynamicContextProvider, useUserWallets, FlowWalletConnectors } from "../app/lib/dynamic";

export default function ProviderWrapper({ children }: React.PropsWithChildren) {
  console.log(process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID);
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID as string,
        walletConnectors: [FlowWalletConnectors],
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}

export function GetUserWallet()
{
  const userWallets = useUserWallets();
  var walletAddress = "0x1B0f8FAE193873F453a7dE8e469468EDf8eedDBD";
  if (userWallets && userWallets.length > 0)
  {
    walletAddress = userWallets[0].address;
    for(var i = 0; i < userWallets.length; i++)
    {
      if (userWallets[i].chain == "Flow") 
      {
        walletAddress = userWallets[i].address;
        break;
      }
    }
  }
  return walletAddress;
}