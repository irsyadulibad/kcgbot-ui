import { io, type Socket } from "socket.io-client";

const socketCache = new Map<string, Socket>();

export function useSocket(namespace: string) {
  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  const isConnected = ref(false);

  const getSocket = (): Socket => {
    if (socketCache.has(namespace)) return socketCache.get(namespace)!;

    const socket = io(`${apiBaseUrl}/${namespace}`);
    socketCache.set(namespace, socket);

    return socket;
  };

  const socket = getSocket();

  const connect = () => {
    if (!socket.connected) socket.connect();

    socket.on("connect", () => (isConnected.value = true));
    socket.on("disconnect", () => (isConnected.value = false));
  };

  const subscribe = (event: string, callback: () => void) => {
    socket.on(event, callback);
  };

  const disconnect = () => {
    if (!socketCache.has(namespace)) return;

    socket.off("connect");
    socket.off("disconnect");
    socket.disconnect();
    socketCache.delete(namespace);
    isConnected.value = false;
  };

  onMounted(() => {
    connect();
  });

  onUnmounted(() => {
    if (!socket.hasListeners("connect")) disconnect();
  });

  return {
    isConnected,
    subscribe,
    disconnect,
  };
}
