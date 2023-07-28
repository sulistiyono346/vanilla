import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../utils/axios";
import { searchRepositories, searchUser } from "../../utils/url";

export const handleSearch = createAsyncThunk(
  "githubReducer/handleSearch",
  async ({ payload, page, type }, { dispatch, getState, rejectWithValue }) => {
    try {
      const { data } = await client().get(
        type === "Users" ? searchUser : searchRepositories,
        {
          params: {
            page: page,
            q: payload,
            per_page: 9,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
