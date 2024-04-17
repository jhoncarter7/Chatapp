import { createContext, useContext, useEffect, useState } from "react";
import { useAuthcontext } from "./authContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthcontext();
  console.log("authUser in socket", authUser);

  useEffect(() => {
    if (authUser) {
      const socket = io("https://mern-chatapp-daum.onrender.com/", {
        query: {
          userId: authUser.data?._id,
        },
      });

      setSocket(socket);
      socket.on("onlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () =>  socket.close();

    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
