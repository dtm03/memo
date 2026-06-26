import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { serverURL } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [refreshCollection, setRefreshCollection] = useState(false);

  useEffect(() => {
    const clearAsyncStorage = async () => {
      try {
        await AsyncStorage.clear();
        console.log("AsyncStorage cleared");
      } catch (error) {
        console.error("Error clearing AsyncStorage:", error);
      }
    };

    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem("userId");
        if (storedUserId) {
          setUserId(parseInt(storedUserId, 10));
        } else {
          const response = await axios.post(`${serverURL}user`);
          const newUserId = response.data;
          await AsyncStorage.setItem("userId", newUserId.toString());
          setUserId(parseInt(newUserId, 10));
          console.log("New user ID:", newUserId);
        }
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };
    // clearAsyncStorage();
    fetchUserId();
  }, []);

  const triggerRefreshCollection = () => {
    setRefreshCollection((prev) => !prev);
  };

  return (
    <UserContext.Provider
      value={{ userId, refreshCollection, triggerRefreshCollection }}
    >
      {children}
    </UserContext.Provider>
  );
};
