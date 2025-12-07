import { Board, BoardWithId } from "@/app/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "@/app/redux/store";

const baseUrl = "http://localhost:3001";
export const addBoard = createAsyncThunk(
  "board/addBoard",
  async (board: Board) => {
    console.log("addBoard started");

    try {
      const res = await fetch(`${baseUrl}/boards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Gönderilen verinin tipini belirtiyoruz
        },
        body: JSON.stringify(board),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const saveBoard = createAsyncThunk(
  "board/saveBoard",
  async (board: BoardWithId) => {
    try {
      const res = await fetch(`${baseUrl}/boards/${board.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Gönderilen verinin tipini belirtiyoruz
        },
        body: JSON.stringify(board),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  "board/deleteBoard",
  async (board: BoardWithId) => {
    try {
      const res = await fetch(`${baseUrl}/boards/${board.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const getBoard = createAsyncThunk("board/getBoard", async () => {
  try {
    const res = await fetch(`${baseUrl}/boards`);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
});
