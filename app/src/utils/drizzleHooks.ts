import { drizzleReactHooks } from '@drizzle/react-plugin';

const { useDrizzle: useDrizzleHook, useDrizzleState: useDrizzleStateHook } = drizzleReactHooks;

export const useDrizzle = () => useDrizzleHook();
export const useDrizzleState = () => useDrizzleStateHook((state: any) => state);
